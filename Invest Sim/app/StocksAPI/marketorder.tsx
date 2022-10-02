export type { User, BuyOrders, Portfolio, Held } from "@prisma/client";
import { totalmem, userInfo } from "os";
import { prisma } from "~/db.server";
import { getPrice } from "~/StocksAPI/marketorderprice";
// import { marketOpen } from "./marketopen";


export async function marketOrder(userID: string, symbol: string, quantity: number, price: number) {
    
    const total = price * quantity;
    console.log("total is " + total + "from market order");

    console.log("finding user")
    const getUser = await prisma.user.findUnique({
        where: {
            id: userID,
        }
    });
    console.log(getUser);

    if (getUser != null) {
        if(Number(getUser.cash) < Number(total)){
            console.log("user does not have enough cash");
            return;
        }
        else{
            getUser.cash = Number(getUser.cash) - Number(total);
            console.log("user has enough cash");
            const portfolio = await prisma.portfolio.findUnique({
                where: {
                    portfolioID: getUser.portfolioID1,
                },
            });
            const heldID = portfolio?.portfolioID;
            const held = await prisma.held.findMany({
                where: {
                    portfolioID: heldID,
                },
            });
            const heldArray = held?.map((item) => item.name);
            if(heldArray?.includes(symbol)){
                console.log("user already has this stock");
                const held = await prisma.held.findUnique({
                    where: {
                        name: symbol,
                    },
                });
                if(held != null){
                    await prisma.held.update({
                        where: {
                            name: symbol,
                        },
                        data: {
                            quantity: Number(held.quantity) + Number(quantity),
                        },
                    });
                    console.log("user has increased their quantity of this stock");
                }
                console.log("user has added this stock to their portfolio");
            }
            else{
                const newHeld = await prisma.held.create({
                    data: {
                        name: symbol,
                        quantity: quantity,
                        portfolioID: portfolio?.portfolioID,
                    },
                });
            }
        }
    } 
    else{
        console.log("user does not exists");
    }
}




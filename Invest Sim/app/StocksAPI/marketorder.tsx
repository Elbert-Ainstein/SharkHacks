import { User, BuyOrders, Portfolio, Held } from "@prisma/client";
import { userInfo } from "os";
import { prisma } from "~/db.server";
import { marketOrderPrice } from "./marketorderprice";
// import { marketOpen } from "./marketopen";
export function marketOrder(userID: string, symbol: string, quantity: number) {
    const total = marketOrderPrice("AAPL", 10);
    console.log("total is " + total + "from market orderrr");
    const user = prisma.user.findUnique({
        where: {
            id: userID,
        },
    });
    const portfolio = prisma.u
    });
}
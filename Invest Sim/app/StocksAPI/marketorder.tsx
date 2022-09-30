import { getPrice } from "~/StocksAPI/getprice";
import type { User, BuyOrders,  } from "@prisma/client";
export const marketOrder = async (symbol: string, quantity: number) => {
  
  const price = await getPrice(symbol);
  const price = int(price);
  console.log(price);
  const orderprice = price * quantity;
    console.log(orderprice);
  if(orderprice > cash)
  
}



// get order price, if you have enough cash and the market is open, then just place the order straight to your portfolio. if the market is closed, place an order and we will fill the order on marketopen
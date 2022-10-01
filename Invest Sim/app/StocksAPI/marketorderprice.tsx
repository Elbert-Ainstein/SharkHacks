import { marketOrder } from "./marketorder";


// import { marketOpen } from "./marketopen";
const finnhub = require('finnhub');
const F_API = "ccrgr8aad3i6utlaj9agccrgr8aad3i6utlaj9b0"

// const key = process.env.F_API
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = F_API
const finnhubClient = new finnhub.DefaultApi()
export type {User, BuyOrders, Portfolio} from "@prisma/client";


export const marketOrderPrice = (symbol: string, quantity: number) => {
  finnhubClient.quote(symbol, (error : any, data : any, response : any) => {
    console.log(data.c);
    var x = data.c;
    console.log("price is " + x);
    const total = quantity * x;
    console.log("total is " + total);
    return total;
  });
  
  
  
  
}




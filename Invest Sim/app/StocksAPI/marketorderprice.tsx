import { marketOrder } from "./marketorder";

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "ccrgr8aad3i6utlaj9agccrgr8aad3i6utlaj9b0"
const finnhubClient = new finnhub.DefaultApi()
export function getPrice(){
finnhubClient.quote("AAPL", (error: any, data: any, response: any) => {
  console.log(data.c);
  passPrice(data.c);
});

}
export function passPrice(data : any) {
  marketOrder("eyJ1c2VySWQiOiJjbDhxMm95ZHEwMDAwbTFlOGQybTg0cnliIn0%3D.RcrCdLPyZwDqr2yvAkmUGPG46nUoxJLBrd4NOmVC1u4", "AAPL", 1, data);
  console.log(data + "is cool asf")
  
}














// export const marketOrderPrice = async (symbol: string, quantity: number) => {
//   await finnhubClient.quote(symbol, (error : any, data : any, response : any) => {
//     console.log(data);
//     var x = data.c;
//     console.log("price is " + x);
//     total = quantity * x;
//     console.log("total is " + total);
//     console.log("total is " + total + "from market order price");
//     // return total;
    
//   });
//   console.log("total b4 return is" + total);
//   return total;

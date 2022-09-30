

const finnhub = require('finnhub');
const F_API = "ccrgr8aad3i6utlaj9agccrgr8aad3i6utlaj9b0"

// const key = process.env.F_API
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = F_API
const finnhubClient = new finnhub.DefaultApi()

export async function getPrice(symbol : any) {
  let promise = new Promise((resolve, reject) => {
    finnhubClient.quote(symbol, (error : any, data : any, response : any) => {
      console.log(data);
      if (data!=null) {
        resolve(data.c);
        return data.c;
      }
      if (error) {
        reject(error);
        return null;
      }

    });    
  });
} 


import React from "react";
import { getPrice } from "~/StocksAPI/marketorderprice";
import { passPrice } from "~/StocksAPI/marketorderprice";
import {getUserId} from "~/session.server"
import { request } from "http";
import { marketOrder } from "~/StocksAPI/marketorder";
// import { marketOrder } from "~/StocksAPI/marketorder";

  async function test() {
    const symbol = prompt("Enter a symbol");
    
    const price = await passPrice(getPrice(String(symbol).toUpperCase()));

  }

 const Search: React.FC = () => { 
    return (
        <button onClick={test}>Start Search</button>
    )
}

export default Search
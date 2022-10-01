 import { getPrice } from "~/StocksAPI/getprice"
 import React from "react";
import { marketOrderPrice } from "~/StocksAPI/marketorderprice";
import { marketOrder } from "~/StocksAPI/marketorder";
  function searching() {
    
    const item = prompt("Search for a stock");
    const quantity = prompt("How many shares?");
    // marketOrderPrice(String(item), Number(quantity));
    marketOrder();
 }

 const Search: React.FC = () => {
    return (
        <button onClick={searching}>Start Search</button>
    )
}

export default Search
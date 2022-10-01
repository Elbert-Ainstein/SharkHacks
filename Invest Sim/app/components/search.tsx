
import React from "react";
import { getPrice } from "~/StocksAPI/marketorderprice";
import { passPrice } from "~/StocksAPI/marketorderprice";
import {getUserId} from "~/session.server"
import { request } from "http";
// import { marketOrder } from "~/StocksAPI/marketorder";
  async function test() {
    console.log("clicked")
    let a=getPrice();
    console.log("classic " + a);
  }

 const Search: React.FC = () => {
    return (
        <button onClick={test}>Start Search</button>
    )
}

export default Search
import React from "react";

import { getPrice } from "~/StocksAPI/getprice";

const NavBar: React.FC = () => {
    return (
        <div className="w-full p-2">
            <button className="btn font-montserrat btn-ghost text-3xl" onClick={() => {
                getPrice("KO");
            }}>
                Portfolio
            </button>
        </div>
    )
}

export default NavBar
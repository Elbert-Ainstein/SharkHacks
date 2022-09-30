import React from "react";
import { Link } from "@remix-run/react";

import { getPrice } from "~/StocksAPI/getprice";

const NavBar: React.FC = () => {
    return (
        <div className="w-full">
            <div className="navbar md:hidden flex bg-base-100">
                <a className="btn btn-ghost normal-case text-2xl font-montserrat">Portfolio</a>
                <div className="navbar-end flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>    
            </div>
            <div className="navbar hidden border-b-2 border-black md:flex bg-base-100">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost normal-case text-3xl font-montserrat">Portfolio</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/">Item 1</Link></li>
                        <li><Link to="/">Item 1</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
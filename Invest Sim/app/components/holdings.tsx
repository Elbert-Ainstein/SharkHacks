import React from "react";
import { useState } from "react";

const Holdings: React.FC = () => {
    const [state, setState] = useState<number>(1);
    return (
        <div className="w-full  mt-10"> 
            <p className="font-montserrat text-sm">
            Holdings
            </p>
            <div className="border">
                <div className="md:btn-group flex md:flex-row flex-col ">
                    <button className={`w-1/2 md:w-auto rounded-none mx-auto md:mb-8  btn btn-ghost grow ${state==1? "bg-blue-100": ""}`} onClick={(ev) => {
                        setState(1)
                    }}>Stocks and ETFs</button>
                </div>
                <button className={`w-1/2 md:w-auto rounded-none mx-auto md:mb-8  btn btn-ghost grow ${state==2? "bg-blue-100": ""}`} onClick={(ev) => {
                        setState(2)
                    }}>Shorts</button>
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Holdings
import { Link } from "@remix-run/react";
import NavBar from "~/components/navbar";
import { getPrice } from "~/StocksAPI/getprice";
import Holdings from "~/components/holdings";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();

  return (
    <main className="relative p-10 px-20 min-h-screen bg-white sm:items-center sm:justify-center">
      <div className="sm:grid grid-cols-3 gap-4">
        <div className="">
          <p className="text-sm font-montserrat">
            Trading Portfolio
          </p>
          <div className="w-full border p-6">
            <div className="">
              <p className="text-sm pl-2 font-montserrat">
                ACCOUNT VALUE
              </p>
              <p className="text-3xl tracking-wider	">
                $100000
              </p>
            </div>
            <div className="flex mt-4">
              <div className="flex-1">
                <p className="text-xs pl-2 font-montserrat">
                  Buying Power
                </p>
                <p className="text-2xl tracking-wider	">
                  $100000
                </p>
              </div>
              <div className="flex-1">
                <p className="text-xs pl-2 font-montserrat">
                  Cash
                </p>
                <p className="text-2xl tracking-wider	">
                  $100000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Holdings />
    </main>
  );
}

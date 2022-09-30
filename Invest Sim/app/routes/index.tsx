import { Link } from "@remix-run/react";
import NavBar from "~/components/navbar";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative p-10 min-h-screen bg-white sm:items-center sm:justify-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <p className="text-sm font-montserrat">
            Trading Portfolio
          </p>
          <div className="w-full border p-4">
            <div className="">
              <p className="text-sm font-montserrat">
                ACCOUNT VALUE
              </p>
              <p className="text-3xl tracking-wider	">
                $100000
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

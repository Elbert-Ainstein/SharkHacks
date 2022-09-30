import { Link } from "@remix-run/react";
import NavBar from "~/components/navbar";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      
    </main>
  );
}

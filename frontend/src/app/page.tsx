import Image from "next/image";

import { AppNameDisplay } from "./components/AppNameDisplay/AppNameDisplay";
import { Sidebar } from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="">
      <AppNameDisplay />
      <Sidebar />
    </main>
  );
}

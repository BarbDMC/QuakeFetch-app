import Image from "next/image";

import { AppNameDisplay } from "../components/AppNameDisplay/AppNameDisplay";
import { ListContainer } from "../components/List/ListContainer";

export default function Home() {
  return (
    <main className="m-20">
      <AppNameDisplay />
      <ListContainer />
    </main>
  );
}

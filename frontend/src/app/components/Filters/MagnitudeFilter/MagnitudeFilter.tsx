import { Item } from "../Item/Item";
import { magnitudes } from "./magnitudes";

export const MagnitudeFilter = () => {
  return (
    <nav className="h-screen flex flex-col items-center justify-center ">
      <h1 className="text-black text-3xl font-extrabold font-['Nunito']">Magnitude</h1>
      <div className="border-2 border-gray-200 m-4 p-2 rounded-lg w-52 gap-2">
      {
        magnitudes.map((item, index) => (
          <Item key={index} item={item} />
        ))
      }
      </div>
    </nav>
  );
}
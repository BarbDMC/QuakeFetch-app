
import { Item } from "../../interfaces/featuresInterfaces";

interface ListItemProps {
  item: Item;
}

export const ListItem = ({ item } : ListItemProps) => {
  return (
    <div className="border-gray-200 border-2 grid grid-cols-2 rounded-xl m-10">
      <div className="p-2">
        <p>{item.time.toString()}</p>
        <h3 className="text-black text-2xl font-normal font-['Nunito']">{item.title}</h3>
      </div>

      <div className="">
        <div className="w-96 my-2 grow shrink text-center bg-amber-100 rounded-lg text-yellow-800 text-xl font-medium font-['Roboto'] leading-none">
          Magnitude - {item.mag_type}
        </div>
        <div className="w-96 my-2 grow shrink text-center bg-blue-100 rounded-lg text-blue-900 text-xl font-medium font-['Roboto'] leading-none">
          Tsunami Potential: {item.tsunami}
        </div>
        </div>
    </div>
  );
};

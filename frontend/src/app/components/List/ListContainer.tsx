'use client';

import { ListItem } from "./ListItem";
import { useState, useEffect } from "react";
import { Item } from "../../interfaces/featuresInterfaces";
import { getFeatures } from "../../services/featuresServices";

export const ListContainer = () => {
  const [features, setFeatures] = useState<Item[]>([]);

  const onGetFeatures = async () => {
    const response = await getFeatures(1);
    setFeatures(response.data);
  }

  useEffect(() => {
    onGetFeatures();
  }, []);


  return (
    <div className="mt-10">
      <div className="border-gray-200 border-2 rounded-xl">
        <p className="ml-4 text-black text-3xl font-extrabold font-['Nunito']">Results</p>
          {features.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}
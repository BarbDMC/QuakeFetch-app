
import { useState } from "react"; 
import { Item } from "@/src/interfaces/featuresInterfaces";
import { createComment } from "@/src/services/featuresServices";

interface ListItemProps {
  feature: Item;
}

export const Card = ({feature}: ListItemProps) => {
  const [commentText, setCommentText] = useState('');

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
  };

  const onSubmitComment = async () => {
    await createComment(commentText, feature.id);
    setCommentText('');
  };

  return (
    <div className="border-gray-200 border-2 rounded-xl p-20">
      <h3 className="text-black text-3xl font-extrabold font-['Nunito'] my-4 leading-10">{feature.title}</h3>
      <div className="grid grid-cols-2">
        <div className="pr-10">
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Time: </span>
            {feature.time.toString()}
          </p>
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Place: </span>
            {feature.place}
          </p>
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Latitude: </span>
            {feature.coordinates.latitude}
          </p>
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Longitude: </span>
            {feature.coordinates.longitude}
          </p>
        </div>

        <div className="pl-20">
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Magnitude: </span>
            {feature.magnitude}
          </p>
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Magnitude Type: </span>
            {feature.mag_type}
          </p>
          <p className="text-black text-base font-normal font-['Nunito'] leading-10">
            <span className="text-black text-xl font-bold font-['Nunito']">Tsunami Potential: </span>
            {feature.tsunami}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center pt-10">
        <h3 className="text-black text-3xl font-extrabold font-['Nunito'] my-4 leading-10">Comments</h3>
        <button 
          onClick={onSubmitComment}
          className="w-60 h-10 rounded-lg text-center bg-blue-100 text-blue-900 text-xl font-medium font-['Roboto'] leading-none"
          >
            Create new comment +
          </button>
      </div>

      <div className="pt-10">
        <input
            type="text"
            value={commentText}
            onChange={handleCommentChange}
            placeholder="Enter your comment"
            className="w-full border-2 border-gray-300 rounded-lg p-2"
          />
      </div>
    </div>
  )
}

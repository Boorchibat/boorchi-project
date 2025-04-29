import React, { useState } from "react";
import { Button, Separator,} from "../ui";

type LeftSideProps = {
    name: string,
    rating: number,
    released: string,
    playtime: string,
    ratings_count: number,
    achievements_count:number,
    description_raw:string,
}

export const LeftSideInfo = (props: LeftSideProps) => {
  const {
    name,
    rating,
    released,
    playtime,
    ratings_count,
    achievements_count,
    description_raw,
  } = props;
  const [showFull, setShowFull] = useState(false);
  const wordCount = description_raw.split(" ").length;
  const maxWords = 100;
  const shortDescription = description_raw.slice(0, 500);
  const getShortDescription = () => {
    return shortDescription;
  };
  const toggleDescription = () => setShowFull((prev) => !prev);
  return (
    <div>
      <div className="flex gap-x-5 ">
        <div className="bg-white p-2 rounded-md">
          <h1>{released}</h1>
        </div>
        <div className="p-2">
          <h1 className="text-white text-[18px]">
            AVERAGE PLAYTIME: {playtime} Hours
          </h1>
        </div>
      </div>
      <h1 className="text-white text-4xl text-[70px] font-bold">{name}</h1>
      <div className="text-white flex gap-x-2 top-[50px]">
        <h1 className="text-[20px]">Rating: {rating}</h1>
        <Separator />
        <h1 className="text-[20px]">Rating Count: {ratings_count}</h1>
        <Separator />
        <h1 className="text-[20px]">Achievments Count: {achievements_count}</h1>
      </div>
      <div className="flex flex-col mt-4">
        <h1 className="text-white text-[18px] mb-2 font-bold text-[30px]">About</h1>
        <h1 className="text-white text-[18px]">
          {wordCount > maxWords && !showFull
            ? getShortDescription()
            : description_raw}
        </h1>
        {wordCount > maxWords && (
          <Button
            className="text-white mt-2 w-fit hover:underline"
            onClick={toggleDescription}
          >
            {showFull ? "See Less" : "See More"}
          </Button>
        )}
      </div>
    </div>
  );
};

"use client";

import Image from "next/legacy/image";
import { LeftSideInfo } from "./LeftSideInfo";
interface GamePageProps {
  gameData: GameData;
}

export const GamePage = ({ gameData }: GamePageProps) => {
  const {
    background_image,
    pubslishers,
    name,
    website,
    rating,
    released,
    stores,
    playtime,
    platforms,
    tags,
    ratings_count,
    achievements_count,
    description_raw,
    background_image_additional,
  } = gameData;

  return (
    <div className="relative w-full ">
      <Image
        className="absolute z-0 w-full h-[500px] object-cover mix-blend-multiply"
        layout="fill"
        src={background_image}
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <div className="relative z-20 flex flex-col w-full max-w-7xl mx-auto mt-24 px-4">
        <div className="flex gap-x-5">
          <div className=" w-[500px]">
            <LeftSideInfo
              name={name}
              rating={rating}
              released={released}
              playtime={playtime}
              ratings_count={ratings_count}
              description_raw={description_raw}
              achievements_count={achievements_count}
            />
          </div>

          <div className=" w-[500px]">
            <div className="flex justify-center items-center rounded-xl">
              <Image
                src={background_image_additional}
                width={400}
                height={300}
                className="object-contain overflow-hidden"
              />
            </div> 
           
          </div>
        </div>
      </div>
    </div>
  );
};

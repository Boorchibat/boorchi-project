"use client";

import Image from "next/legacy/image";
import { LeftSideInfo } from "./LeftSideInfo";
import Link from "next/link";
import { Separator } from "../ui";
interface GamePageProps {
  gameData: GameData;
}

export const GamePage = ({ gameData }: GamePageProps) => {
  const {
    background_image,
    publishers,
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
  const singleArray = stores.map((s) => s.store);
  console.log(platforms);
  const singlePlatform = platforms.map((p) => p.platform);
  return (
    <div className="relative w-full z-0">
      <Image
        className="absolute z-0 w-full h-[500px] object-cover mix-blend-multiply"
        layout="fill"
        src={background_image}
      alt="Player avatar"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      <div className="relative z-20 flex flex-col w-full max-w-7xl mx-auto mt-24 px-4">
        <div className="flex gap-x-5 lg:w-full">
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

          <div className="hidden sm:block w-[500px] p-0 2xl:hidden">
            <div className="flex flex-col justify-center items-center rounded-xl">
              <Image
                src={background_image_additional}
                width={500}
                height={350}
                className="object-contain overflow-hidden rounded-xl"
              />
              <div className="flex flex-col">
                <h1 className="font-bold text-white text-[20px]">
                  Publisher: {publishers.map((p) => p.name).join(", ")}
                </h1>
                <Separator className="mt-[10px]" orientation="horizontal" />
                <Link className="mt-[10px]" href={website}>
                  <h1 className=" text-white text-[20px] underline">
                    See more about the game on their website: {website}
                  </h1>
                </Link>
                <Separator className="mt-[10px]" orientation="horizontal" />
                <h1 className="text-white mt-[10px] text-[20px]">
                  Tags: {tags.map((t) => t.name).join(", ")}
                </h1>
                <Separator className="mt-[10px]" orientation="horizontal" />
                <h1 className="text-white mt-[10px] text-[20px]">
                  Available on {singleArray.map((s) => s.name).join(", ")}
                </h1>
                <Separator className="mt-[10px]" orientation="horizontal" />
                <h1 className="text-white mt-[10px] text-[20px]">
                  Platforms on {singlePlatform.map((p) => p.name).join(", ")}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

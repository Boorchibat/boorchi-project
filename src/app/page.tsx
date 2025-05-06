"use client";

import { GamesList } from "@/components/game";
import { ButtonList } from "@/components/home";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton";
import { Skeleton } from "@/components/ui";
import { useFetchDataFromRAWG } from "@/hooks/useFetchDataFromRAWG";
import { Suspense } from "react";

const HomePage = () => {
  const { data, error, isLoading } = useFetchDataFromRAWG<Results>("/games");
  const games = data?.results || [];

  if (isLoading) return <HomeSkeleton/>;
  if (error) return <p>Error loading games.</p>;

  return (
    <Suspense fallback={<div><Skeleton/></div>}>
      <div className="flex flex-col items-center bg-[#f9fafb]">
        <h1 className="font-bold text-[50px] text-black p-5 font-lobster justify-center">
          Home and Trending
        </h1>
        <div className="flex w-full">
          <div className="sticky top-0 h-screen">
            <ButtonList />
          </div>
          <div className="z-0">
            <GamesList games={games} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default HomePage;

"use client";

import { GamesList } from "@/components/game";
import { ButtonList } from "@/components/home";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton";
import { useFetchDataFromRAWG } from "@/hooks/useFetchDataFromRAWG";
import React from "react";

const Xbox = () => {
  const { data, error, isLoading } =
    useFetchDataFromRAWG<Results>("/games?platforms=1");
  console.log(data);
  const games = data?.results || [];

  if (isLoading) return <HomeSkeleton/>;
  if (error) return <p>Error loading games.</p>;

  return (
    <div className="flex flex-col items-center bg-[#f9fafb]">
      <h1 className="font-bold text-[50px] text-black p-5 font-lobster">
        Games available on Xbox
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
  );
};

export default Xbox;

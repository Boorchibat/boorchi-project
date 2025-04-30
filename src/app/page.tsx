"use client";

import { GamesList } from "@/components/game";
import { ButtonList } from "@/components/home";
import { useFetchDataFromRAWG } from "@/hooks/useFetchDataFromRAWG";

export default function HomePage() {
  const { data, error, isLoading } = useFetchDataFromRAWG<Results>("/games");
  const games = data?.results || [];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading games.</p>;

  return (
    <div className="flex flex-col items-center bg-[#f9fafb]">
      <h1 className="font-bold text-[50px] text-black p-5 font-lobster justify-center">Home and Trending</h1>
      <div className="flex w-full">
        <div className="sticky top-0 h-screen">
          <ButtonList />
        </div>
        <GamesList games={games} />
      </div>
    </div>
  );
}

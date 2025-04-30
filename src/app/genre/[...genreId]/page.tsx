import { GamesList } from "@/components/game";
import { ButtonList } from "@/components/home";
import { getGameGenreById } from "@/services";
import { getGenreById } from "@/services/get-genre-name-by-id";
import React from "react";

const Genre = async ({ params }: GenreRouteParams) => {
  const { genreId } = await params;

  const gameData = await getGameGenreById(genreId);
  const genre = await getGenreById(genreId);
  if (!genre) {
    return <div>Genre not found</div>;
  }
  if (!gameData) {
    return <div>Game not found</div>;
  }
  const games = gameData.results;
  return (
    <div className="flex flex-col items-center bg-[#f9fafb]">
      <h1 className="font-bold text-[50px] text-black p-5 font-lobster justify-center">
        Results for {genre.name}
      </h1>
      <div className="flex w-full">
        <div className="sticky top-0 h-screen">
          <ButtonList />
        </div>
        <GamesList games={games} />
      </div>
    </div>
  );
};

export default Genre;

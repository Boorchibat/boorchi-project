
import React from "react";
import { Card, Separator } from "../ui";
import { SearchLoading } from "./SearchLoading";
import { SearchNoResult } from "./SearchNoResult";
import { SearchResultCard } from "./SearchResultCard";
import { useFetchDataFromRAWG } from "@/hooks/useFetchDataFromRAWG";

type SearchResultListProps = {
  searchValue: string;
  removeSearchValue: () => void;
};

export const SearchResultList = (props: SearchResultListProps) => {
  const { searchValue, removeSearchValue } = props;
  const { data, isLoading } = useFetchDataFromRAWG<GameListResponse>(
   `/games?search=${searchValue}`
  );
  const games = data?.results.filter((movie) => movie.id) ?? [];
  const firstFiveGames = games.slice(0, 5);

  if (isLoading) return <SearchLoading />;
  if (!firstFiveGames.length) return <SearchNoResult />;

  return (
    <Card className="absolute left-1/2 top-[63px] w-[335px] h-[400px] -translate-x-1/2 p-3 lg:w-[577px] lg:h-auto z-50">
      {firstFiveGames.map((game, index) => (
        <div key={index} className="relative">
          <SearchResultCard
            game={game}
            removeSearchValue={removeSearchValue}
          />
          <Separator />
          <div className="absolute bottom-0 right-0 p-3 flex items-center gap-x-2"></div>
        </div>
      ))}
    </Card>
  );
};

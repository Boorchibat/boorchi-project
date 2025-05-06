"use client";

import { GenreCard } from "@/components/genre/GenreCard";
import { ButtonList } from "@/components/home";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton";
import { useFetchDataFromRAWG } from "@/hooks/useFetchDataFromRAWG";
import React from "react";

const Genre = () => {
  const { data, error, isLoading } = useFetchDataFromRAWG<Results>("/genres");
  const genres = data?.results || [];
  console.log(genres);
  if (error) return <div>Error</div>;
  if (isLoading) return <HomeSkeleton/>;
  return (
    <div>
      <div className="flex">
        <ButtonList />
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[50px] mt-4 mb-4">Genres</h1>
          <div className="flex flex-wrap gap-4 p-5 rounded-md">
            {genres.map((genre, index) => (
              <GenreCard key={index} genre={genre} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Genre;

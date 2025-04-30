import React from "react";
import { Button } from "../ui";
import Link from "next/link";

type GenreCardProps = {
  genre: GameData;
};

export const GenreCard = (props: GenreCardProps) => {
  const { genre } = props;
  const { name, id} = genre;

  return (
    <div>
      <Link href={`/genre/${id}`}>
        <Button className="w-[200px] h-[100px] cursor-pointer font-bold ">{name}</Button>
      </Link>
    </div>
  );
};

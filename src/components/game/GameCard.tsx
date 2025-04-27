import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { ArrowRight, Star } from "lucide-react";
import { GameImage } from "./GameImage";

type GameCardProps = {
  game: GameData;
};

export const GameCard = ({ game }: GameCardProps) => {
  const { id, background_image, name, rating, released } = game;
  const formattedYear = new Date(released).getFullYear();
    console.log(game)

  return (
    <div className="w-[150px]h-[300px]">
      <Link
        href={`/game/${id}`}
        className="flex flex-col gap-x-4 hover:bg-muted rounded-md"
      >
        <GameImage
          backgroundpath={background_image}
          className="w-[250px] h-[125px] rounded-md"
        />

        <div className="flex-1 text-foreground bg-white rounded-md w-[250px]">

          <h4 className="font-bold text-[15px]">{name}</h4>
          <div className="flex gap-x-2">
            <Star fill="yellow" />
            <h4>{rating}</h4>
          </div>

          <div className="mt-3 flex justify-between text-sm font-medium">
            <h5 className="font-bold">{formattedYear}</h5>
            <Button variant="link">
              See more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

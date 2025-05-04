"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight, Heart, Star } from "lucide-react";
import { GameImage } from "./GameImage";
import {
  addGameToFavorites,
  isGameFavorited,
  removeGameFromFavorites,
} from "../firebase/FirebaseUtils";
import { useUserContext } from "../context/UserContextProvider";
import { cn } from "@/lib";
type GameCardProps = {
  game: GameData;
  isFavorited: boolean
};

export const GameCard = ({ game, isFavorited: isFavoritedProp  }: GameCardProps) => {
  const { id, background_image, name, rating, released } = game;
  const formattedYear = new Date(released).getFullYear();
  const [isFavorited, setIsFavorited] = useState(isFavoritedProp ?? false);
  const { currentUser } = useUserContext();
  useEffect(() => {
    const checkFavoriteStatus = async () => {
      const favorited = await isGameFavorited(id);
      setIsFavorited(favorited);
    };
    checkFavoriteStatus();
  }, [id]);

  const handleFavoriteClick = async () => {
    if (!isFavorited) {
      await addGameToFavorites(game);
      setIsFavorited(true);
    }
  };
 
  const handleFavoriteDoubleClick = async () => {
    if (isFavorited) {
      await removeGameFromFavorites(id);
      setIsFavorited(false);
    }
  };


  return (
    <div className="w-[150px]h-[300px]] rounded-md border-1 border-black z-0 mb-[10px] relative">
      <Link
        href={`/game/${id}`}
        className="flex flex-col gap-x-4 hover:bg-muted rounded-md"
      >
        <GameImage
          backgroundpath={background_image}
          className="w-[250px] h-[125px] rounded-md"
        />

        <div className="flex-1 bg-white dark:bg-zinc-800 text-black dark:text-white rounded-md w-[250px]">
          <h4 className="font-bold text-[15px]  ml-2 mt-1 ">{name}</h4>
          <div className="flex gap-x-2  ml-2 ">
            <Star fill="yellow" />
            <h4>{rating}</h4>
          </div>

          <div className="mt-3 flex justify-between text-sm font-medium">
            <h5 className="font-bold  ml-2 ">{formattedYear}</h5>
            <div className="flex flex-col">
              <div className="ml-18">
                {currentUser ? (
                  <Heart 
                    onClick={(e) => {
                      e.preventDefault();
                      handleFavoriteClick();
                    }}
                    onDoubleClick={(e) => {
                      e.preventDefault();
                      handleFavoriteDoubleClick();
                    }}
                    fill={isFavorited ? "red" : "none"}
                    className={cn(
                      "cursor-pointer mr-[10px] mb-[10px] absolute bottom-2 left-55 z-10",
                      isFavorited && "text-red-500"
                    )}
                  />
                ) : (
                  <Button variant="link">
                    See more <ArrowRight size={16} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

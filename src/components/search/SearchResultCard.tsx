import Link from "next/link";
import { Button, Separator } from "../ui";
import { ArrowRight, Star } from "lucide-react";
import { GameImage } from "../game/GameImage";

type SearchResultCardProps = {
  game: GameData;
  removeSearchValue: () => void;
};

export const SearchResultCard = (props: SearchResultCardProps) => {
  const { game, removeSearchValue } = props;

  const { name, released, id, background_image, rating } = game;
  console.log(background_image);

  const formattedYear = new Date(released).getFullYear();
  return (
    <div>
      <Link
        href={`/game/${id}`}
        className="flex gap-x-4 hover:bg-muted rounded-md"
        onClick={removeSearchValue}
      >
        {
          <GameImage
            backgroundpath={`${background_image}`}
            className="w-[120px] h-[80px] rounded-md"
          />
        }

        <div className="flex-1 text-foreground">
          <h4 className="font-bold text-[15px]">{name}</h4>
          <div className="flex gap-x-2">
            <Star fill="yellow"/>
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

      <Separator className="my-2 border" />
    </div>
  );
};

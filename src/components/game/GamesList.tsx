import { GameCard } from "./GameCard";
import { cn } from "@/lib";

type GameListProps = {
  games: GameData[];
};

export const GamesList = ({ games }: GameListProps) => {
    if(!games) return <div>No movies available right now please try again later!</div>
  return (
    <div className={cn("flex flex-wrap gap-8 justify-center")}>
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
};


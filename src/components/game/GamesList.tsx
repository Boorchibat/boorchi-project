import { GameCard } from "./GameCard";
import { cn } from "@/lib";

type GameListProps = {
  games: (GameData & { isFavorited?: boolean })[];
};

export const GamesList = ({ games }: GameListProps) => {
  if (!games || games.length === 0)
    return <div>No games available right now. Please try again later!</div>;

  return (
    <div className={cn("flex flex-wrap gap-8 z-10")}>
      {games.map((game, index) => (
        <GameCard key={index} game={game} isFavorited={game.isFavorited ?? false} />
      ))}
    </div>
  );
};

import { GamePage } from "@/components/game/GamePage";
import { ButtonList } from "@/components/home";
import { getGameDetailById } from "@/services/get-game-detail-by-id";
import React from "react";

const Game = async ({ params }: GameRouteParams) => {
  const { gameId } = await params;

  const gameData = await getGameDetailById(gameId);

  if (!gameData) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex">
      <div className="sticky top-0 h-screen z-10 bg-black">
        <ButtonList />
      </div>

      <GamePage gameData={gameData} />
    </div>
  );
};

export default Game;

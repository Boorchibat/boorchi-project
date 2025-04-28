import { GamePage } from "@/components/game/GamePage";
import { ButtonList } from "@/components/home";
import { getGameDetailById } from "@/services/get-game-detail-by-id";
import React from "react";

type gamePage = {
  gameId: string;
};

const Game = async ({ params }: { params: gamePage }) => {
  const { gameId } = await params;

  const gameData = await getGameDetailById(gameId);

  if (!gameData) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex">
      <ButtonList />
      <GamePage gameData={gameData} />
    </div>
  );
};

export default Game;

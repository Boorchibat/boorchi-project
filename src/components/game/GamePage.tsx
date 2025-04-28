import React from 'react';

interface GamePageProps {
  gameData: GameData; 
}

export const GamePage = ({ gameData }: GamePageProps) => {
const {background_image, pubslishers, name, website, rating, released, stores} = gameData
  return (
    <div>
      <h1>{gameData.name}</h1>
    </div>
  );
};

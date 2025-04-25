"use client";
import { useFetchDataFromRAWG } from "@/hooks/useFetchDataFromRAWG";

type Game = {
  name: string;
  released: string;
};

export default function HomePage() {
  const { data, error, isLoading } = useFetchDataFromRAWG<{ results: Game[] }>(
    "/games"
  );
  console.log(data)

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading games.</p>;

  return (
    <div>
      {data?.results.map((game, idx) => (
        <div key={idx}>
          <h2>{game.name}</h2>
          <p>Released: {game.released}</p>
        </div>
      ))}
    </div>
  );
}

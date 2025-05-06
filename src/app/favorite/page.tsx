"use client";

import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { db } from "@/components/firebase/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { GamesList } from "@/components/game";
import { ButtonList } from "@/components/home";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton";

const Favorites = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchGames = async () => {
        try {
          const gamesCollection = collection(db, "favorites");
          const q = query(gamesCollection, where("userId", "==", user.uid));
          const gamesSnapshot = await getDocs(q);

          const gamesList = gamesSnapshot.docs.map((doc) => {
            const game = doc.data();
            return {
              id: game.id, 
              name: game.name,
              background_image: game.background_image,
              rating: game.rating,
              released: game.released,
              genres: game.genres || [],
              ratings: game.ratings || [],
              short_screenshots: game.short_screenshots || [],
              stores: game.stores || [],
              isFavorited: true,
            } as GameData & { isFavorited: boolean };
          });

          setGames(gamesList);
        } catch (error) {
          console.error("Error fetching games:", error);
        }
      };

      fetchGames();
    }
  }, [user]); 
  

  if (loading) return <HomeSkeleton/>;

  if (!user) {
    return <div>User is not logged in. Please sign in to view favorites.</div>;
  }
  if(!games) {
    return <div>No games favorited at the moment.</div>
  }

  return (
    <div className="flex flex-col items-center bg-[#f9fafb]">
        <h1 className="font-bold text-[50px] text-black p-5 font-lobster">
           Your Favorite Games
        </h1>
        <div className="flex w-full">
          <div className="sticky top-0 h-screen">
            <ButtonList />
          </div>
          <div className="z-0 ml-3">
            <GamesList games={games} onFavoritePage={true} />
          </div>
        </div>
      </div>
  );
};

export default Favorites;

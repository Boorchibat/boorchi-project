import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from "./Firebase";


export const isGameFavorited = async (id: number) => {
  const user = auth.currentUser;
  if (!user) return false;

  const favRef = doc(db, "favorites", `${user.uid}_${id}`);
  const docSnap = await getDoc(favRef);
  return docSnap.exists();
};

export const addGameToFavorites = async (game: GameData) => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not logged in");

  const favRef = doc(db, "favorites", `${user.uid}_${game.id}`);
  await setDoc(favRef, {
    userId: user.uid,
    gameId: game.id,
    name: game.name,
    background_image: game.background_image,
    rating: game.rating,
    released: game.released,
  });

  console.log(`Added game ${game.name} to favorites for user ${user.uid}`);;
};

export const removeGameFromFavorites = async (gameId: number) => {
  const user = auth.currentUser;
  if (!user) throw new Error("An error occurred while removing the game from favorites.AKA User not logged in.");

  const favRef = doc(db, "favorites", `${user.uid}_${gameId}`);
  await deleteDoc(favRef);
};

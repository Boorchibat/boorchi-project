
import { fetchDataFromRAWG } from "@/utils";
import { AxiosError } from "axios";

export const getGameDetailById = async (gameId: string) => {
  try {
    const gameData = await fetchDataFromRAWG<GameData>(
      `/games/${gameId}`
    );
    return gameData;
  } catch (error) {
    const { message, response } = error as AxiosError;
    console.error(`failed to catch movie ${message}`, {
      data: response?.data,
      status: response?.status,
    });
  }
};

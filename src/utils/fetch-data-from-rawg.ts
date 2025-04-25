import { axiosInstance } from "@/lib";

export const fetchDataFromRAWG = async <T>(endpoint: string): Promise<T> => {
    try {
      const { data } = await axiosInstance.get<T>(endpoint);
      return data;
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  };
  
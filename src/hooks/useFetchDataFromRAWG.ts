import { fetchDataFromRAWG } from "@/utils";
import useSWR from "swr";

export const useFetchDataFromRAWG = <T>(endpoint: string) => {
  const { data, error, isLoading } = useSWR<T>(endpoint, fetchDataFromRAWG);

  return { data, error, isLoading };
};
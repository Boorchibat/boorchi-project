import { fetchDataFromRAWG } from '@/utils';
import { AxiosError } from 'axios';

export const getGenreById = async (genreId: string) => {
    try {
      const genreData = await fetchDataFromRAWG<Genre>(`/genres/${genreId}`);
      return genreData;
    } catch (error) {
            const { message, response } = error as AxiosError;
            console.error(`failed to catch movie ${message}`, {
              data: response?.data,
              status: response?.status,
            });
          }
  };

import { useInfiniteQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () =>
useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: [
    'games', gameQuery],
queryFn:({pageParam = 1})=> apiClient.getAll({

    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
    },
    [gameQuery]
    );

  })
}
  

export default useGames;

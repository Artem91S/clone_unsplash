import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchSearchCategoria } from "../utils/fetchData.js"

export const useGetDataCategoria =(query)=>{
    return  useInfiniteQuery({
        queryKey: [query],
        queryFn:fetchSearchCategoria,
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
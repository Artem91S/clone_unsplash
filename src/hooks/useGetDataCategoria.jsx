import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchDataCategoria } from "../utils/fetchData.js"


export const useGetDataCategoria =(query)=>{
    return  useInfiniteQuery({
        queryKey: [query],
        queryFn:fetchDataCategoria,
        queryHash:query,
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
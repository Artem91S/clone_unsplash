import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchDataLink } from "../utils/fetchData.js"


export const useGetDataLink =(query)=>{
    return  useInfiniteQuery({
        queryKey: [query],
        queryFn:fetchDataLink,
        queryHash:query,
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
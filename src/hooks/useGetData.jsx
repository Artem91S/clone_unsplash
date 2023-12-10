import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchData } from "../utils/fetchData.js"

export const useGetData =()=>{
    return  useInfiniteQuery({
        queryKey: ["posters"],
        queryFn: fetchData,
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
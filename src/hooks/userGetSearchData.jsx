import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchSearchPhoto } from "../utils/fetchData.js"

export const useGetSearchData =(value)=>{
    return  useInfiniteQuery({
        queryKey: [value],
        queryFn: fetchSearchPhoto,
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
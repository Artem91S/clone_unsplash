import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchDataCategoria } from "../utils/fetchData.js"


export const useGetDataCategoria =(queryValue)=>{
    return  useInfiniteQuery({
        queryKey: ["search"],
        queryFn: ()=>fetchDataCategoria(queryValue),
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
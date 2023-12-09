import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchPhoto} from "../utils/fetchData.js"

export const useGetPhoto =(photoId)=>{
    return  useInfiniteQuery({
        queryKey: ["photo"],
        queryFn: ()=>fetchPhoto(photoId),
        initialPageParam: 1,
        getNextPageParam: (_, pages) => pages.length + 1,
      });
}
import { useInView } from "react-intersection-observer";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Article from "../ui/Article/Article";
import { useGetData } from "../../hooks/useGetData,";
import { useMemo,useEffect } from "react";
import ListOfPhoto from './ListOfPhoto'

function Home({ title }) {
   const {data} = useGetData();
 
  useDocumentTitle(title);

  const allItems = useMemo(
    () =>
      data?.pages.reduce(function (a, b) {
        return a.concat(b);
      }),
    [data]
  );
  // console.log(allItems?[0].urls.small);
  
  return (
    <>
      <Article title={title} photo={allItems && allItems[0].urls?.regular} />
      <ListOfPhoto  />
    </>
  );
}

export default Home;

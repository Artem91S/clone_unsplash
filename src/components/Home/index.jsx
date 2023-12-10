import useDocumentTitle from "../../hooks/useDocumentTitle";
import Article from "../ui/Article/Article";
import { useGetData } from "../../hooks/useGetData"
import { useMemo } from "react";
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
  
  return (
    <>
      <Article title={title} photo={allItems && allItems[7].urls?.regular} />
      <ListOfPhoto  results={'all'}/>
    </>
  );
}

export default Home;

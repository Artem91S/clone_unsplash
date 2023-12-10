import React, {  useMemo } from "react";
import { useGetDataCategoria } from "../../hooks/useGetDataCategoria";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ListOfPhoto from '../Home/ListOfPhoto'
import Article from '../ui/Article/Article'

function CategoriaPage({ queryValue }) {
  useDocumentTitle(queryValue);
  const { data} =useGetDataCategoria(queryValue) ;
  const allItems = useMemo(() => {
    const res = data?.pages.map((item) => {
      return item.results;
    });
    const result = res?.reduce(function (a, b) {
      return a.concat(b);
    });
    return result;
  }, [data]);
  // console.log(allItems);
  return (
    <>
      <Article title={queryValue} photo={allItems && allItems[20].urls?.regular} />
      <ListOfPhoto getFunction={useGetDataCategoria} query={queryValue} results={false} />
    </>
  );
}

export default CategoriaPage;

import React, {  useMemo } from "react";
import { useGetDataLink } from "../../hooks/useGetDataLink";
import ListOfPhoto from '../Home/ListOfPhoto'
import Article from '../ui/Article/Article'
import useDocumentTitle from "../../hooks/useDocumentTitle";

function LinksPage({ queryValue }) {
  useDocumentTitle(queryValue);
  const { data} =useGetDataLink(queryValue) ;
  const allItems = useMemo(() => {
    const res = data?.pages.map((item) => {
      return item.results;
    });
    const result = res?.reduce(function (a, b) {
      return a.concat(b);
    });
    return result;
  }, [data]);
  console.log(allItems);
  return (
    <>
      <Article title={queryValue} photo={allItems && allItems[20].urls?.regular} />
      <ListOfPhoto  query={queryValue} results={'links'} />
    </>
  );
}

export default LinksPage;

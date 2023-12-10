import React, { useContext, useMemo } from 'react'
import { Quantity } from '../../router'
import { useGetSearchData } from '../../hooks/userGetSearchData';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import ListOfPhoto from '../Home/ListOfPhoto';
import style from './index.module.scss'

function SearchPage() {
  useDocumentTitle('Search result');
  const [showSearch]=useContext(Quantity)
  const { data }=useGetSearchData(showSearch)
  const allItems = useMemo(() => {
    const res = data?.pages.map((item) => {
      return item.results;
    });
    const result = res?.reduce(function (a, b) {
      return a.concat(b);
    });
    return result;
  }, [data]);

  const sectionImg =allItems?.filter((item,index)=>{
    if(index < 30 ){
      return item
    }
   
  })
 
  return (
    <>
    {!showSearch?<h2 className={style.item_text}>No search items.....</h2> :<div>
     <div className={style.search__container}>
      {sectionImg?.map(img=>(
        <div className={style.image__container}>
          <img className={style.image__container_img}  src={img.urls.small} alt='r'/>
        </div>
      ))}
      </div>
       <ListOfPhoto results={'search'} query={showSearch}/>

     </div>}
     
      
    </>
  )
}

export default SearchPage
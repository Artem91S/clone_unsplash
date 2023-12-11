import React, { useMemo } from 'react'
import { useGetDataCategoria } from '../../../hooks/useGetDataCategoria'
import { useParams } from 'react-router-dom';
import style from './index.module.scss';

function ListOfCategorias() {
    const { categoria } = useParams();
    const{data} =useGetDataCategoria(categoria)
    const allItems = useMemo(() => {
        const items = data?.pages.map((item) => {
            return item.results;
          });
          const result = items?.reduce(function (a, b) {
            return a.concat(b);
          });
          return result;
    })
    console.log(allItems);
  return (
    <div className={style.list__categoria} >
        {allItems?.map((item)=>(
            <div>
                <h3 className={style.categoria__title} >{item.title}</h3>
                <div className={style.categoria__container} >
                {item?.preview_photos?.map(photo=>(
                <div style={{background:`url(${photo.urls.small}}) no-repeat center/cover`}} className={style.container__poster}/>
                ))}
                </div>
                <div className={style.container__tags}  >
                    {item.tags.map(tag=>(
                        <p className={style.tags__item}>
                            {tag.title}
                        </p>
                    ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default ListOfCategorias
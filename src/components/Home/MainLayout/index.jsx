import React, { useEffect } from "react";
import { useGetData } from "../../../hooks/useGetData,";
import MasonryContainer from "../../ui/MasonryContainer/MasonryContainer";
import { useInView } from "react-intersection-observer";
import style from './index.module.scss'
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiMiniChevronDown } from "react-icons/hi2";



function MainLayout() {
  const { ref, inView } = useInView();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    status
  } = useGetData();
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const allItems = React.useMemo(
    () =>
      data?.pages.reduce(function (a, b) {
        return a.concat(b);
      }),
    [data]
  );
  // console.log(allItems);
  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <div>
      <MasonryContainer
        columnsCountBreakPoints={{
          350: 1,
          640: 2,
          700: 3,
        }}
        gutter="24px"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "start",
        }}
      >
        {allItems?.map((photo) => (
          <div className={style.poster__container}>
            <div className={style.container__user_information}>
              <img src={photo.urls?.thumb} alt={photo.user.name} style={{width:"28px", height:"28px", borderRadius:'50%'}} />
              <p>{photo.user.name}</p>
            </div>
          <a key={photo.id} ref={ref} to={`/${photo.id}`}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description}
              style={{ width: "100%", height: "100%" }}
            />
          </a>
          <div className={style.container__buttons}>
            <div className={style.buttons__icons}>
              <div className={style.icons__container}><FaHeart/></div>
              <div className={style.icons__container}><FaPlus/></div>
            </div>
            <div className={style.buttons__download}>
              <div className={style.download__text}>
               Download
              </div>
              <div className={style.download__icon}>
              <HiMiniChevronDown/>
              </div>
            </div>
          </div>
         </div>
        ))}
      </MasonryContainer>
    </div>
  );
}

export default MainLayout;

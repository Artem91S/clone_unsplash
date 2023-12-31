import { useEffect, useMemo, useState } from "react";
import MasonryContainer from "../../ui/MasonryContainer/MasonryContainer";
import style from "./index.module.scss";
import { FaHeart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { HiMiniChevronDown } from "react-icons/hi2";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useGetDataLink } from "../../../hooks/useGetDataLink";
import { useGetData } from "../../../hooks/useGetData";
import { useGetSearchData } from "../../../hooks/userGetSearchData";

function ListOfPhoto({ results, query }) {
  const { ref, inView } = useInView();
  const [switchColumns,setSwitchColumns]=useState(false)
  const { data, error, fetchNextPage, hasNextPage, status } =
    results === "all"
      ? useGetData()
      : results === "links"
      ? useGetDataLink(query)
      : useGetSearchData(query);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const allItems = useMemo(() => {
    if (results === "all") {
      return data?.pages.reduce(function (a, b) {
        return a.concat(b);
      });
    } else {
      const items = data?.pages.map((item) => {
        return item.results;
      });
      const result = items?.reduce(function (a, b) {
        return a.concat(b);
      });
      return result;
    }
  }, [data]);
  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (

    <div className={style.poster}>
      <button className={style.switch_btn} onClick={()=>setSwitchColumns(!switchColumns)}>Switch columns</button>
      <MasonryContainer
        columnsCountBreakPoints={{
          350: 1,
          640: 2,
          768: switchColumns ? 5 : 3,
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
              <img
                src={photo.urls?.thumb}
                alt={photo.user.name}
                style={{ width: "28px", height: "28px", borderRadius: "50%" }}
              />
              <p>{photo.user.name}</p>
            </div>
            <Link key={photo.id} ref={ref} to={`/${photo.id}`}>
              <img
               className={style.container__image}
                src={photo.urls.small}
                alt={photo.alt_description}
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
            <div className={style.container__buttons}>
              <div className={style.buttons__icons}>
                <div className={style.icons__container}>
                  <FaHeart />
                </div>
                <div className={style.icons__container}>
                  <FaPlus />
                </div>
              </div>
              <div className={style.buttons__download}>
                <div className={style.download__text}>Download</div>
                <div className={style.download__icon}>
                  <HiMiniChevronDown />
                </div>
              </div>
            </div>
          </div>
        ))}
      </MasonryContainer>
    </div>
  );
}

export default ListOfPhoto;

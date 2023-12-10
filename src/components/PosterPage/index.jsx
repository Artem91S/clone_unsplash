import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetPhoto } from "../../hooks/useGetPhoto";
import style from "./index.module.scss";
import { FaHeart } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";

function PosterPage() {
  const { photoId } = useParams();
  const { data, status, error } = useGetPhoto(photoId);
  const allItems = useMemo(
    () =>
      data?.pages.reduce(function (a, b) {
        return a.concat(b);
      }),
    [data]
  );

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div className={style.poster__container}>
      <div className={style.container__image}>
      <img src={allItems?.urls.regular} alt={allItems?.alt_description}  />
      </div>
      <div className={style.container__description}>
        <h3 className={style.description__title}>{allItems?.alt_description}</h3>
        <p className={style.description__text}>{allItems?.description}</p>
        <div className={style.description__icons}>
          <div className={style.icons__container}>
            <FaHeart className={style.icons__heart_icon}/>
            <span className={style.icons__heart_text}>{allItems?.likes}</span>
            </div>
          <div className={style.icons__container}>
            <FaArrowCircleDown className={style.icons__download_icon}/>
          <span>{allItems?.downloads}</span>
          </div>
        </div>
      </div>
      <div 
      className={style.container__categories}
      >
        {allItems?.tags.map((tag) => (
          <p className={style.categories__item} key={tag.title}>{tag.title}</p>
        ))}
      </div>
    </div>
  );
}

export default PosterPage;

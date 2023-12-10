import React, { useRef } from "react";
import style from "./index.module.scss";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
 const categories = [
  {
    id: 1,
    title: "Editorial",
  },
  {
    id: 2,
    title: "Following",
  },
  {
    id: 3,
    title: "Unsplash+",
  },
  {
    id: 4,
    title: "The Holidays",
  },
  {
    id: 5,
    title: "Wallpapers",
  },
  {
    id: 6,
    title: "3D Renders",
  },
  {
    id: 7,
    title: "Nature",
  },
  {
    id: 8,
    title: "Architecture & Interiors",
  },
  {
    id: 9,
    title: "Experimental",
  },

  {
    id: 10,
    title: "Textures & Patterns",
  },
  {
    id: 11,
    title: "Film",
  },
  {
    id: 12,
    title: "Animals",
  },
  {
    id: 13,
    title: "Street Photography",
  },
  {
    id: 14,
    title: "Food & Drink",
  },
  {
    id: 15,
    title: "Travel",
  },
  {
    id: 16,
    title: "Fashion & Beauty",
  },
  {
    id: 17,
    title: "People",
  },
  {
    id: 18,
    title: "Health & Wellness",
  },
  {
    id: 19,
    title: "Sports",
  },
  {
    id: 20,
    title: "Spirituality",
  },
  {
    id: 21,
    title: "Current Events",
  },
  {
    id: 22,
    title: "Business & Work",
  },
];
function LinkList() {
  const ref = useRef(null);
  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth * 3;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth * 3;
    });
  };

  return (
    <div className={style.container__links}>
      {/* <div className={style.link__block_button}>
        <FiChevronLeft className={style.link__button_next} onClick={next} />
      </div> */}

      <ul className={style.container__list} ref={ref}>
        {categories.map((item) => (
          <NavLink reloadDocument to={item.title} className={style.list__link} key={item.id}>
            {item.title}
          </NavLink>
        ))}
      </ul>
      {/* <div>
        <FiChevronRight className={style.btn_2} onClick={prev} />
      </div> */}
    </div>
  );
}

export default LinkList;

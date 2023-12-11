import { useRef } from "react";
import style from "./index.module.scss";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { categories } from "../../../../router";

function LinkList() {
  const ref = useRef(null);
  const prev = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth * 6;
    });
  };

  const next = () => {
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth * 6;
    });
  };

  return (
    <div className={style.container__links}  >
      <div className={style.link__block_button_next} onClick={next} >
        <FiChevronLeft className={style.link__button_next} />
      </div>

      <ul className={style.container__list}  ref={ref}>
        {categories.map((item) => (
          <NavLink reloadDocument to={item.path} className={style.list__link} key={item.id}>
            {item.title}
          </NavLink>
        ))}
      </ul>

      <div className={style.link__block_button_prev}>
        <FiChevronRight className={style.link__button_next}  onClick={prev} />
      </div>
    </div>
  );
}

export default LinkList;

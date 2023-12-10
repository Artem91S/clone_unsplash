import React from "react";
import MainIcon from "../../../assets/icons/MainIcon";
import SearchField from "./SearchField/SearchField";
import BellIcon from "../../../assets/icons/BellIcon";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./index.module.scss";
import LinkList from "./LinkList/LinkList";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header className={style.header}>
      <nav className={style.header__navbar}>
        <div>
        <Link to='/'>
          <MainIcon />
          </Link>
        </div>
        <SearchField />

        <div className={style.navbar__links}>
        
            <ul className={style.links__block}>
              <Link className={style.links__block_item}>Advertise</Link>
              <Link className={style.links__block_item}>Blog</Link>
              <Link className={style.links__block_item}>Unsplash+</Link>
            </ul>
     
          <div className={style.links__button}>
            <div>Submit a photo</div>
          </div>
        </div>

        <div className={style.navbar__icons}>
          <div className={style.icons__bell}>
            <BellIcon />
          </div>
          <div>
            <FaUserCircle className={style.icons__user} />
          </div>
          <div>
            <GiHamburgerMenu  className={style.icons__menu}  />
          </div>
        </div>
      </nav>
      <LinkList/>
    </header>
  );
}

export default Header;

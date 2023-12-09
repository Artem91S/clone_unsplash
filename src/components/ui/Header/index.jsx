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
          <div >
            <ul>
              <li>Advertise</li>
              <li>Blog</li>
              <li>Unsplash+</li>
            </ul>
          </div>
          <div>
            <button>Submit a photo</button>
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

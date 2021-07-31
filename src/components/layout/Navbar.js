import React, { useEffect, useState } from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";

import style from "./Navbar.module.css";
import Avatar from "../../images/sora.png";

function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setSolid(true);
      } else {
        setSolid(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`${style.navbar} ${!solid && style.navbar__transparent}`}>
      <div className={style.navbar__nav}>
        <img
          className={style.navbar__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <ul className={style.navbar__links}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New &amp; popular</li>
          <li>My List</li>
        </ul>
      </div>
      <ul className={style.navbar__userControls}>
        <li>
          <SearchIcon />
        </li>
        <li>KIDS</li>
        <li>
          <NotificationsIcon />
        </li>
        <li>
          <img src={Avatar} alt="avatar" className={style.navbar__avatar} />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import React from "react";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navbar__nav}>
        <img
          className={style.navbar__logo}
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
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
        <li>Search</li>
        <li>KIDS</li>
        <li>Bell</li>
        <li>AV</li>
      </ul>
    </div>
  );
}

export default Navbar;

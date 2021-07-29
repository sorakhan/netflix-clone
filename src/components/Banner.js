import axios from "../services/axios";
import request from "../services/requests";
import React, { useEffect, useState } from "react";
import style from "./Banner.module.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(request.topRated);
      const data = response.data.results;
      const index = Math.floor(Math.random() * (data.length - 1));
      console.log(data[index], index);
      setMovie(data[index]);
      return response;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={style.banner}
      style={{ backgroundImage: `url(${baseURL}${movie?.backdrop_path})` }}
    >
      <div className={style.banner__content}>
        <h2 className={style.banner__title}>{movie.title}</h2>
        <p className={style.banner__blurb}>{truncate(movie.overview, 180)}</p>
        <div className={style.banner__buttons}>
          <button className={style.button__play}>Play</button>
          <button className={style.button__info}>More info</button>
        </div>
      </div>
      {/* Hugo photo at the back */}
      {/* Logo / title */}
      {/* Blurb */}
      {/* Buttons (play icon, Play) && ( icon, More info) */}
    </header>
  );
}

export default Banner;

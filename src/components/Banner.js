import axios from "../services/axios";
import request from "../services/requests";
import React, { useEffect, useState } from "react";
import style from "./Banner.module.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

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
          <button className={style.button__play}>
            <PlayArrowIcon className={style.button__icon} />
            Play
          </button>
          <button className={style.button__info}>
            <InfoOutlinedIcon className={style.button__icon} />
            More info
          </button>
        </div>
      </div>
      <div className={style.banner__bottom}></div>
    </header>
  );
}

export default Banner;

import React, { useEffect, useState } from "react";
import axios from "../../services/axios";

import style from "./Row.module.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isExclusive }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
      // backdrop_path eg. "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg"
      // poster_path
      // original_title, title
      // overview
      // adult? does this tell us PG and stuff?
    }
    fetchData();
  }, [fetchUrl]);

  function showPosters(movie) {
    const poster = isExclusive ? movie.poster_path : movie.backdrop_path;
    return (
      poster && (
        <img
          key={movie.id}
          className={style.row__image}
          src={`${baseURL}${poster}`}
          alt={movie.title}
        />
      )
    );
  }

  return (
    <div className={style.row}>
      <h2 className={style.row__title}>{title}</h2>
      <div className={style.row__posters}>
        {movies.map((movie) => showPosters(movie))}
      </div>
    </div>
  );
}

export default Row;

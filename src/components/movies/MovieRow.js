import React, { useEffect, useState } from "react";
import axios from "../../services/axios";
import MovieItem from "./MovieItem";

import style from "./MovieRow.module.css";

const baseURL = "https://image.tmdb.org/t/p/original/";

function MovieRow({ title, fetchUrl, isExclusive }) {
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

  function getImagePath(movie) {
    return isExclusive ? movie?.poster_path : movie?.backdrop_path;
  }

  return (
    <div className={`${isExclusive ? style.row__big : style.row}`}>
      <h2 className={style.row__title}>{title}</h2>
      <div className={style.row__posters}>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            title={movie?.title || movie?.original_title || movie?.name}
            isExclusive={isExclusive}
            path={`${baseURL}${getImagePath(movie)}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;

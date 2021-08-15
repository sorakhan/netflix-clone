import React, { useState } from "react";
import style from "./MovieItem.module.css";
import MoviePreview from "./MoviePreview";
import YouTube from "react-youtube";

function MovieItem({ path, title, isExclusive }) {
  const [showPreview, setShowPreview] = useState(false);
  const opts = {
    height: "130",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    autohide: "1",
  };

  async function showHandler() {
    setShowPreview(true);
  }

  async function hideHandler() {
    setShowPreview(false);
  }

  return (
    <div
      className={style.movie}
      onMouseEnter={showHandler}
      onMouseLeave={hideHandler}
    >
      {/* <img className={isExclusive ? style.huge__image : style.movie__image} src={path} alt={title} /> */}
      {showPreview ? (
        <YouTube
          videoId="htqXL94Rza4"
          opts={opts}
          className={isExclusive ? style.huge__image : style.movie__image}
        />
      ) : (
        <img
          className={isExclusive ? style.huge__image : style.movie__image}
          src={path}
          alt={title}
        />
      )}
      <div className={isExclusive ? style.overlay : null}>
        {showPreview && <MoviePreview />}
      </div>
    </div>
  );
}

export default MovieItem;

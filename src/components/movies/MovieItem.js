import React, { useState } from "react";
import style from "./MovieItem.module.css";
import MoviePreview from "./MoviePreview";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function MovieItem({ path, title, isExclusive }) {
  const [showPreview, setShowPreview] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "130",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      showInfo: 0,
      autohide: 1,
    },
  };

  async function showHandler() {
    if (trailerUrl) {
      setTrailerUrl("");
      setShowPreview(false);
    } else {
      movieTrailer(title || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search); // everything after ? in a url
            setTrailerUrl(urlParams.get("v"));
            setShowPreview(true);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  async function hideHandler() {
    setTrailerUrl("");
    setShowPreview(false);
  }

  return (
    <div
      className={style.movie}
      onMouseEnter={showHandler}
      onMouseLeave={hideHandler}
    >
      {showPreview ? (
        <YouTube
          videoId={trailerUrl}
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

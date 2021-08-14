import React, { useState } from "react";
import style from "./MovieItem.module.css";
import MoviePreview from "./MoviePreview";

function MovieItem({ path, title, isExclusive }) {
  const [showPreview, setShowPreview] = useState(false);

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
      <img className={isExclusive ? style.huge__image : style.movie__image} src={path} alt={title} />
      <div className={isExclusive ? style.overlay : null}>
        {showPreview && <MoviePreview />}
      </div>
    </div>
  );
}

export default MovieItem;

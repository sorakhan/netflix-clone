import React, { useState } from "react";
import style from "./MovieItem.module.css";
import MoviePreview from "./MoviePreview";

function MovieItem({ path, title }) {
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
      <img className={style.movie__image} src={path} alt={title} />
      {showPreview && (
        <MoviePreview />
      )}
    </div>
  );
}

export default MovieItem;

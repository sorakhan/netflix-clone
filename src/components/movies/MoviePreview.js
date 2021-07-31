import React from "react";
import style from "./MoviePreview.module.css";

function MoviePreview() {
  return (
    <div className={style.card}>
      <div className={style.card__preview}></div>
      <div className={style.card__content}>
        <div className={style.card__icons}>
          <div className={style.icon}></div>
        </div>
        <h4 className={style.card__text}>
          <span className={style.text__rating}>98% match</span> 2h 26m
        </h4>
        <h4 className={style.card__text}>Suspensful</h4>
      </div>
    </div>
  );
}

export default MoviePreview;

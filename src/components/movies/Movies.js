import request from "../../services/requests";
import React from "react";
import MovieRow from "./MovieRow";
import style from "./Movies.module.css";

function Content() {
  return (
    <div className={style.movies}>
      <MovieRow title="Trending now" fetchUrl={request.trending} />
      <MovieRow title="Comedies" fetchUrl={request.comedy} />
      <MovieRow title="Documentaries" fetchUrl={request.documentaries} />
      <MovieRow
        title="Only on Netflix"
        fetchUrl={request.originals}
        isExclusive
      />
      <MovieRow title="Dramas" fetchUrl={request.drama} />
      <MovieRow title="Fantasy" fetchUrl={request.fantasy} />
      <MovieRow title="Romantic Movies" fetchUrl={request.romantic} />
      <MovieRow title="Action" fetchUrl={request.action} />
    </div>
  );
}

export default Content;

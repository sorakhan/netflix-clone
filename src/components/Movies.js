import request from "../services/requests";
import React from "react";
import Row from "./layout/Row";

function Content() {
  return (
    <div>
      <Row title="Trending now" fetchUrl={request.trending} />
      <Row title="Comedies" fetchUrl={request.comedy} />
      <Row title="Documentaries" fetchUrl={request.documentaries} />
      <Row title="Only on Netflix" fetchUrl={request.originals} isExclusive />
      <Row title="Dramas" fetchUrl={request.drama} />
      <Row title="Fantasy" fetchUrl={request.fantasy} />
      <Row title="Romantic Movies" fetchUrl={request.romantic} />
      <Row title="Action" fetchUrl={request.action} />
    </div>
  );
}

export default Content;

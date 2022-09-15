import React from "react";
import { url } from "../../data/link";

import Banner from "./banner/banner";
import MovieList from "./MovieList/movielist";
import BrowseStyle from "./Browse.module.css";

function Browse() {
  return (
    <div>
      <Banner />
      <div className={BrowseStyle["list"]}>
        <MovieList fetchUrl={url.Banner} isLarge />
        <MovieList title="Xu hướng" fetchUrl={url.Trending} />
        <MovieList title="Xếp hạng cao" fetchUrl={url.TopRate} />
        <MovieList title="Hành động" fetchUrl={url.Action} />
        <MovieList title="Hài" fetchUrl={url.Comedy} />
        <MovieList title="Kinh dị" fetchUrl={url.Horror} />
        <MovieList title="Lãng mạn" fetchUrl={url.Romance} />
        <MovieList title="Tài liệu" fetchUrl={url.Document} />
      </div>
    </div>
  );
}

export default Browse;

import React, { useState } from "react";
import { imageSizePath } from "../../../data/link";
import MovieDetail from "../movieDetail/movieDetail";
import moviesStyle from "./movielist.module.css";

const MovieList = (props) => {
  const [show, setShow] = useState(false);
  const handleInfoMovie = () => {
    setShow(() => setShow(!show));
  };
  return (
    <div className={moviesStyle["list"]}>
      {props.type &&
        props.data.map((item) => {
          return (
            <div className={moviesStyle["list-poster"]} key={item.id}>
              <img
                onClick={handleInfoMovie}
                src={`${imageSizePath}w154${item.poster_path}`}
                alt=""
              />
              {show && <MovieDetail data={item} />}
            </div>
          );
        })}
      {props.Utype &&
        props.data.map((item) => {
          return (
            <div className={moviesStyle["list-backdrop"]} key={item.id}>
              <img
                onClick={handleInfoMovie}
                src={`${imageSizePath}w200${item.backdrop_path}`}
                alt=""
              />
              {show && <MovieDetail data={item} />}
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;

import React, { useState, useEffect } from "react";
import { imageSizePath } from "../../../data/link";
import MovieDetail from "../movieDetail/movieDetail";
import moviesStyle from "./movielist.module.css";
import useFetch from "../../../hooks/useFetch";

const MovieList = ({ fetchUrl, title, isLarge }) => {
  const { movies, fetchMovies } = useFetch(fetchUrl);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");
  useEffect(() => {
    async function fecthData() {
      await fetchMovies();
    }
    fecthData();
  }, [fetchMovies]);

  const handleInfoMovie = (movie) => {
    setShow(() => setShow(!show));
    setInfo(movie);
  };
  
  return (
    <div>
      <h1 className={moviesStyle["title"]}>{title}</h1>
      <div className={moviesStyle["list"]}>
        {movies.map((item) => {
          return (
            <div className={moviesStyle["list-poster"]} key={item.id}>
              <img
                className={
                  isLarge
                    ? moviesStyle["list-img"]
                    : moviesStyle["list-img-large"]
                }
                onClick={() => handleInfoMovie(item)}
                src={`${imageSizePath}${
                  isLarge ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
                key={item.id}
              />
            </div>
          );
        })}
        {show && <MovieDetail data={info} />}
      </div>
    </div>
  );
};

export default MovieList;

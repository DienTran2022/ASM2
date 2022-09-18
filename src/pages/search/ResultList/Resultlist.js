import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { API_KEY, imageSizePath } from "../../../data/link";
import MovieDetail from "../../browse/movieDetail/movieDetail";
import ResultStyle from "./Resultlist.module.css";

const ResultList = (props) => {
  const { movies, fetchMovies } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${props.data}&page=1&include_adult=false`
  );
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");
  const [infoClick, setInfoClick] = useState("");
  console.log(movies);
  useEffect(() => {
    async function fecthData() {
      await fetchMovies();
    }
    fecthData();
  }, [fetchMovies]);

  const handleInfoMovie = (movie) => {
    setInfo(movie);
    if (infoClick === movie.name || infoClick === movie.original_title) {
      setShow(() => setShow(!show));
      setInfoClick("");
    } else {
      setInfoClick(movie.name || movie.original_title);
    }
  };
  let content = "";

  if (movies.length === 0 || movies.backdrop_path === "null") {
    content = <p>No movies has found</p>;
  } else {
    content = movies.map((item) => {
      return (
        <div key={item.id}>
          <div className={ResultStyle["showresults"]}>
            <img
              onClick={() => handleInfoMovie(item)}
              className={ResultStyle["img"]}
              alt={item.name}
              src={`${imageSizePath}${item.backdrop_path}`}
            />
          </div>
        </div>
      );
    });
  }

  return (
    <div className={ResultStyle["border"]}>
      <h1 className={ResultStyle["text"]}>Search Results</h1>
      <div className={ResultStyle["showresults"]}>{content}</div>
      <div>{show && <MovieDetail data={info} />}</div>
    </div>
  );
};

export default ResultList;

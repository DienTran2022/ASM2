import React, { useEffect } from "react";
import { url } from "../../data/link";
import useFetch from "../../hooks/useFetch";
import Banner from "./banner/banner";
import MovieList from "./MovieList/movielist";
import BrowseStyle from "./Browse.module.css";

function Browse() {
  const { movies: movieOriginal, fetchMovies: fetchMoviesOriginal } = useFetch(
    url.Banner
  );

  const { movies: movieTrending, fetchMovies: fetchMoviesTrending } = useFetch(
    url.Trending
  );

  const { movies: movieTopRate, fetchMovies: fetchMoviesTopRate } = useFetch(
    url.TopRate
  );

  const { movies: movieAction, fetchMovies: fetchMoviesAction } = useFetch(
    url.Action
  );

  const { movies: movieComedy, fetchMovies: fetchMoviesComedy } = useFetch(
    url.Comedy
  );

  const { movies: movieHorror, fetchMovies: fetchMoviesHorror } = useFetch(
    url.Horror
  );

  const { movies: movieRomance, fetchMovies: fetchMoviesRomance } = useFetch(
    url.Romance
  );

  const { movies: movieDocument, fetchMovies: fetchMoviesDocument } = useFetch(
    url.Document
  );

  useEffect(() => {
    async function fetchData() {
      await fetchMoviesOriginal();
      await fetchMoviesTrending();
      await fetchMoviesTopRate();
      await fetchMoviesAction();
      await fetchMoviesComedy();
      await fetchMoviesHorror();
      await fetchMoviesRomance();
      await fetchMoviesDocument();
    }
    fetchData();
  }, [
    fetchMoviesOriginal,
    fetchMoviesTrending,
    fetchMoviesTopRate,
    fetchMoviesAction,
    fetchMoviesComedy,
    fetchMoviesHorror,
    fetchMoviesRomance,
    fetchMoviesDocument,
  ]);
  return (
    <div>
      <div>
        {movieOriginal.length !== 0 && (
          <Banner
            data={
              movieOriginal[
                Math.floor(Math.random() * (movieOriginal.length - 1))
              ]
            }
          />
        )}
      </div>
      <div className={BrowseStyle["list"]}>
        <MovieList data={movieOriginal} type={movieOriginal} />
        <h2>Xu hướng </h2>
        <MovieList data={movieTrending} Utype={movieTrending} />
        <h2>Xếp hạng cao </h2>
        <MovieList data={movieTopRate} Utype={movieTopRate} />
        <h2>Hành động </h2>
        <MovieList data={movieAction} Utype={movieAction} />
        <h2>Hài </h2>
        <MovieList data={movieComedy} Utype={movieComedy} />
        <h2>Kinh dị </h2>
        <MovieList data={movieHorror} Utype={movieHorror} />
        <h2>Lãng mạn </h2>
        <MovieList data={movieRomance} Utype={movieRomance} />
        <h2>Tài liệu </h2>
        <MovieList data={movieDocument} Utype={movieDocument} />
      </div>
    </div>
  );
}

export default Browse;

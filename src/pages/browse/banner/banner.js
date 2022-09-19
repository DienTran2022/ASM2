import React, { useEffect } from "react";
import { imageSizePath } from "../../../data/link";
import NavBar from "../nav-bar/navbar";
import BannerStyle from "./banner.module.css";
import useFetch from "../../../hooks/useFetch";
import { url } from "../../../data/link";

const Banner = () => {
  // Lấy data API dựa trên data dựa trên url
  const { movies, fetchMovies } = useFetch(url.Banner);
  const dataRandom =
    movies.length !== 0 &&
    movies[Math.floor(Math.random() * (movies.length - 1))];
  useEffect(() => {
    async function fecthData() {
      await fetchMovies();
    }
    fecthData();
  }, [fetchMovies]);

  return (
    <div className={BannerStyle["background"]}>
      <NavBar />
      <img
        className={BannerStyle["image"]}
        src={`${imageSizePath}${dataRandom.backdrop_path}`}
        alt={dataRandom.name}
      />
      <div className={BannerStyle["info"]}>
        <h1 className={BannerStyle["name"]}>{dataRandom.name}</h1>
        <div>
          <button className={BannerStyle["button"]}>Play</button>
          <button className={BannerStyle["button"]}>My List</button>
        </div>
        <p className={BannerStyle["overview"]}>{dataRandom.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

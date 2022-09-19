import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { API_KEY } from "../../../data/link";
import InfoYoutubeStyle from "./infoyoutube.module.css";
import YouTube from "react-youtube";

const InfoYoutube = (props) => {
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  // Lấy data API dựa trên data trang MovieList
  const { movies, fetchMovies } = useFetch(
    `https://api.themoviedb.org/3//movie/${props.data.id}/videos?api_key=${API_KEY}`
  );
  useEffect(() => {
    async function fecthData() {
      await fetchMovies();
    }
    fecthData();
  }, [fetchMovies]);

  let videoinfo = movies.find((item) => {
    return item.type === "Trailer";
  });

  ////////////////////////////////////////////
  // Tạo biến content để xử lý dữ liệu với từng tính huống data nhận từ get API phía trên
  let content = "";
  if (!props.data.hasOwnProperty("video") || typeof videoinfo === "undefined") {
    content = (
      <img
        src={`http://image.tmdb.org/t/p/w780${props.data.backdrop_path}`}
        alt={props.data.name}
      ></img>
    );
  } else if (typeof videoinfo !== "undefined") {
    content = (
      <YouTube
        videoId={videoinfo.key}
        opts={opts}
        className={InfoYoutubeStyle["youtube"]}
      />
    );
  }

  return <div>{content}</div>;
};
export default InfoYoutube;

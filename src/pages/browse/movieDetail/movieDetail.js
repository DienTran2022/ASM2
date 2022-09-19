import React from "react";
import movieDetailStyle from "./movieDetail.module.css";
import InfoYoutube from "./infoyoutube";
const MovieDetail = (props) => {
  return (
    <div className={movieDetailStyle["movieDetail"]}>
      <div className={movieDetailStyle["info"]}>
        <h1 className={movieDetailStyle["title"]}>
          {props.data.original_title || props.data.name}
        </h1>
        <hr></hr>
        <p>{`Release Date: ${props.data.release_date}`}</p>
        <p>{`Vote: ${props.data.vote_average}/10`}</p>
        <p
          className={movieDetailStyle["overview"]}
        >{`${props.data.overview}`}</p>
      </div>
      <div className={movieDetailStyle["youtube"]}>
        <InfoYoutube data={props.data} />
      </div>
    </div>
  );
};

export default MovieDetail;

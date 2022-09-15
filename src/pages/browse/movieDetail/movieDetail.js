import React from "react";
import movieDetailStyle from "./movieDetail.module.css";

const MovieDetail = (props) => {
  console.log(props.data);
  return (
    <div className={movieDetailStyle["movieDetail"]}>
      <div className={movieDetailStyle["info"]}>
        <h1 className={movieDetailStyle["title"]}>
          {props.data.original_title}
        </h1>
        <hr></hr>
        <p>{`Release Date: ${props.data.release_date}`}</p>
        <p>{`Vote: ${props.data.vote_average}/10`}</p>
        <p>{`${props.data.overview}`}</p>
      </div>
      <div>
        <h1> Video Youtube</h1>
      </div>
    </div>
  );
};

export default MovieDetail;

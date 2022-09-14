import React from "react";
import { imageSizePath } from "../../../data/link";
import NavBar from "../nav-bar/navbar";
import BannerStyle from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={BannerStyle["background"]}>
      <NavBar />
      <img
        className={BannerStyle["image"]}
        src={`${imageSizePath}w1280${props.data.backdrop_path}`}
        alt={props.data.name}
      />
      <div className={BannerStyle["info"]}>
        <h1 className={BannerStyle["name"]}>{props.data.name}</h1>
        <div>
          <button className={BannerStyle["button"]}>Play</button>
          <button className={BannerStyle["button"]}>My List</button>
        </div>
        <p className={BannerStyle["overview"]}>{props.data.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

import ImagesContainer from "../Image-container/Container";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";

import "./Banner.css";
import React from "react";
const Banner = (props) => {
  return (
    <div className="banner-wrap">
      <Navbar />
      <Main />
      <ImagesContainer />
    </div>
  );
};

export default Banner;

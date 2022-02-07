import React from "react";
import "./intro.css";
import Me from '../images/me-6.png'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is </h2>
          <h1 className="i-name">POmpoeye</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-End Developer</div>
              <div className="i-title-item">UI-UX Designer</div>
              <div className="i-title-item">Photographer</div>
              <div className="i-title-item">Sports Enthusiast</div>
            </div>
          </div>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            ducimus, et sit eveniet odit consequatur expedita, officia
            voluptates error quam labore. Soluta ducimus aspernatur sit iure
            magnam voluptatum ex eveniet.
          </p>
        </div>
        <svg></svg>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

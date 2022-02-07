import React from "react";
import "./about.css";
import camera from "../images/photoshoot.jpg";
import Award from "../images/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img className="a-img" src={camera} alt="" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis at
          accusamus illo placeat labore nesciunt!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil est
          possimus corrupti nemo, laborum saepe. Quia blanditiis, eum aliquam
          nemo earum adipisci illo omnis aut aperiam quidem! Maxime, rem iusto.
        </p>
        <div className="a-award">
          <img src={Award} className="a-award-img" />
          <div className="a-award-texts">
            <div className="a-award-title">International Design</div>
            <div className="a-award-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nobis dicta. Hic cum optio provident!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

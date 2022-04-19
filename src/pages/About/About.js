import React from "react";
import img from "./image/20210122_170611.png"

const About = () => {
  return (
    <div className="container w-75 mt-4">
      <div className="row g-5 align-items-center">
        <div className="col-md-6">
          <h1><span className="text-info fw-bold">My Goals</span></h1>
          <p>There were many goals in my life. But seven months ago, I am change my decision. and set mind  I wish I will be a web developer in the next year. So I am buying a Programming Hero coach for learn web development.  And next six months target more learning web development. </p>
        </div>
        <div className="col-md-6">
          <img className="img-fluid border border-3 rounded" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

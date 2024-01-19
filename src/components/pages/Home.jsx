import React from "react";
import myPhoto from "../../assets/image.jpg";

function Hero() {
  return (
    <div className="py-5 text-center">
      <div className="d-sm-flex justify-content-around align-items-center">
        <div>
          <h1>Hello, I'm Monica</h1>
          <p className="lead mb-3">Frontend Developer</p>
          <div className="icon mb-4">
            <a href="https://www.twitter.com/Mon1ca3D">
              <i className="fa fa-twitter fa-2x icon-spacing"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i className="fa fa-linkedin fa-2x icon-spacing"></i>
            </a>
            <a href="https://github.com/acinom7">
              <i className="fa fa-github fa-2x"></i>
            </a>
          </div>
        </div>
        <img
          className="img-fluid w-25 rounded"
          id="myPhoto"
          src={myPhoto}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import projectsInfo from "..//../projects.json";

function Projects() {
  console.log(projectsInfo);

  return (
    <div>
      <h2 className="text-center mt-4">Projects</h2>
      <div className="container mt-5">
        <div className="row g-4">
          {projectsInfo.map((props) => {
            return (
              <div
                key={props.id}
                className="cardContainer col-lg-4 col-md-4 col-sm-12"
              >
                <div className="card">
                  <img src={props.image} class="card-img-top" alt="" />
                  <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.description}</p>
                    <a href={props.link} class="btn btn-dark">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;

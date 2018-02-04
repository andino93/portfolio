import React from 'react';

const Projects = () => (
  <div className="hero is-bold is-light">
    <div className="hero-body">
      <div className="container">
        <div className="title level-item">Projects</div>
        <div className="container">
          <div className="tabs is-centered is-large is-boxed is-fullwidth is-mobile">
            <ul>
              <li className="is-active"><a>All</a></li>
              <li><a>X-PEAs</a></li>
              <li><a>rocket!</a></li>
              <li><a>WhaleThen</a></li>
              <li><a>Fam.ly</a></li>
              <li><a>DooToo</a></li>
            </ul>
          </div>
          Add some React stuff here for projects. Maybe I'll need some state
          <div className="hero is-large">
            <div className="hero-body">
              Test check to make sure unsized hero can change size dynamically
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;

import React from 'react';
import PropTypes from 'prop-types';

const Project = props => (
    <div className="tile is-ancestor">
      <div className="tile is-4 is-vertical">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </figure>
          </article>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-4 is-vertical">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </figure>
          </article>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </figure>
          </article>
        </div>
      </div>
      <div className="tile is-4 is-vertical">
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </figure>
          </article>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification is-info">
            <p className="title">Middle tile</p>
            <p className="subtitle">With an image</p>
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" alt="placeholder" />
            </figure>
          </article>
        </div>
      </div>
    </div>

);

Project.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Project;

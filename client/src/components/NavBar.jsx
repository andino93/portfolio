import React from 'react';

const NavBar = () => (
  <div
    className="navbar is-fixed-top is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <div className="navbar-item">
        <img
          src="https://brandfolder.com/adsnative/logo/adsnative-primary-logo.png"
          alt="Andrew Nguyen Porfolio"
          width="112"
          height="28"
        />
        <div className="navbar-menu">
          <a className="navbar-item" href="https://github.com/andino93">
            <img
              src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              width="30"
              height="50"
            />
            Github
          </a>
          <a className="navbar-item" href="https://www.linkedin.com/in/andino93/">
            <img
              src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin.png"
              alt="Linkedin Logo"
              width="30"
              height="50"
            />
            Linkedin
          </a>
          <a className="navbar-item" href="mailto:andrew.at.nguyen@gmail.com">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/13/55/letter-147563_1280.png"
              alt="email"
              width="30"
              height="50"
            />
            Email
          </a>
        </div>
      </div>
      <button className="button navbar-burger">
        <span />
        <span />
        <span />
      </button>
    </div>
  </div>
);

export default NavBar;

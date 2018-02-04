import React from 'react';

const NavBar = () => (
  <div className="hero is-fullheight is-primary is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="section">
          <img
            src="https://brandfolder.com/adsnative/logo/adsnative-primary-logo.png"
            alt="Andrew Nguyen Porfolio"
            width="112"
            height="28"
          />
        </div>
        <button className="button navbar-burger">
          <span />
          <span />
          <span />
        </button>
      </div>
    </div>
  </div>
);

export default NavBar;

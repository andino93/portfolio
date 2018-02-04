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

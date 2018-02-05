import React from 'react';
import Sticky from 'react-stickynode';

const NavBar = () => (
  <Sticky innerZ={1}>
    <div className="navbar is-light">
      <div className="navbar-item">Home</div>
      <div className="navbar-item">Expertise</div>
      <div className="navbar-item">Projects</div>
      <div className="navbar-item">About</div>
      <div className="navbar-item">Contact</div>
    </div>
  </Sticky>
);

export default NavBar;

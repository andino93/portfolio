import React from 'react';
import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Expertise from './Expertise';
import Footer from './Footer';

const App = () => (
  <div className="section">
    <NavBar />
    <About />
    <Projects />
    <Expertise />
    <Footer />
  </div>
);

export default App;

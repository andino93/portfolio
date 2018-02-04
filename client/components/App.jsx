import React from 'react';
import Greeter from './Greeter';
import About from './About';
import Projects from './Projects';
import Expertise from './Expertise';
import Footer from './Footer';
import NavBar from './NavBar';

const App = () => (
  <div>
    <Greeter />
    <NavBar />
    <Expertise />
    <Projects />
    <About />
    <Footer />
  </div>
);

export default App;

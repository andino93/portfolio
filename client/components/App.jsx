import React from 'react';
import Sticky from 'react-stickynode';
import Greeter from './Greeter';
import About from './About';
import Projects from './Projects';
import Expertise from './Expertise';
import Footer from './Footer';
import NavBar from './NavBar';

const App = () => (
  <div>
    <Greeter />
    <Sticky>
      <NavBar />
    </Sticky>
    <Expertise />
    <Projects />
    <About />
    <Footer />
  </div>
);

export default App;

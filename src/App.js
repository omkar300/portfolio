import React from 'react';
import Navbar from './components/navbar/Navbar';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Publications from './components/Publications/Publications';
import TechnicalSkills from './components/Technical Skills/TechnicalSkills';
import SoftSkills from './components/SoftSkills/SoftSkills';
import CareerGoals from './components/CareerGoals/CareerGoals';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Experience/>
      <Publications/>
      <TechnicalSkills/>
      <SoftSkills/>
      <CareerGoals/>
      <Hobbies/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;

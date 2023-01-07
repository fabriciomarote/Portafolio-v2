import React, { useState } from 'react'
import { ContainerGeneral } from './components/theme/Changes';
import { ThemeProvider } from 'styled-components';
import Themes from './components/theme/Themes'
import NavBar from './components/NavBar.jsx';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
      <div>
        <ThemeProvider theme={Themes[theme]}>
          <ContainerGeneral>  
              <div className="navbar">
                <NavBar theme={theme} setTheme={setTheme}/>
              </div> 
              <Home theme={theme} setTheme={setTheme}/>
              <AboutMe theme={theme} setTheme={setTheme}/>
              <Skills theme={theme} setTheme={setTheme}/>
              <Projects theme={theme} setTheme={setTheme}/>
              <Contact  theme={theme} setTheme={setTheme}/>
              <Footer theme={theme} setTheme={setTheme}/> 
          </ContainerGeneral>
        </ThemeProvider>
      </div> 
  );
};

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ProjectsContainer } from "./theme/Changes";
import Themes from './theme/Themes'
import projects from "../data/Projects.js";
import ModelProject from './ModelProject.jsx';
import '../styles/Projects.css';

const Proyects = ( props ) => {
  
    const { theme } = props;    

    return (
        <ThemeProvider theme={Themes[theme]}>
            <ProjectsContainer>
                <a name='proyectos'/>
                <div className='projects-box-container'>
                    <div className='title-box'>
                        <p>MIS PROYECTOS</p>
                    </div> 
                    <div className='box-home'>
                        <div className='box-projects'>
                            { projects.map( project => {
                                return <ModelProject key={project.id} project={project} theme={theme}/>
                            })}
                        </div>
                    </div>
                </div>
            </ProjectsContainer>
        </ThemeProvider>
    );
  }
  
  export default Proyects;
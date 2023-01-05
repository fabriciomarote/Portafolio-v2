import React from "react";
import { FaGithub, FaPager } from "react-icons/fa";
import { ThemeProvider } from 'styled-components';
import { ModelProjectContainer } from "./theme/Changes";
import Themes from './theme/Themes'
import '../styles/ModelProject.css';

const ModelProject = (props) => {

    const { project, theme } = props

    return (
        <ThemeProvider theme={Themes[theme]}>
            <ModelProjectContainer>
                <div className="project-container">
                    <img alt="imagen" className="image-project" src={project.image}></img>
                    <div className="add-info">
                        <p className="title">{project.title}</p>
                        <p>{project.text}</p>
                        <div className='box-buttons'>
                            { project.link1 !== "" ? 
                            <a href={project.link1} className='button-project'><FaPager size={23}/>Ver proyecto</a>
                            :
                            <div className="not-link1"/>
                            }
                            <a href={project.link2} className='button-project'><FaGithub size={23}/>Ver código</a>
                        </div> 
                    </div>
                </div>
            </ModelProjectContainer>
        </ThemeProvider>  
    );
};
  
export default ModelProject;

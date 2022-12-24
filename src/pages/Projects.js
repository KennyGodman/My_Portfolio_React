import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Pro1 from '../assets/Pro1.jpg'
import Pro2 from '../assets/Pro2.jpg' 
import "../styles/Projects.css"
import {ProjectList} from "../helpers/ProjectList"

function Projects () {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        
      {ProjectList.map((project, idx)=>{
        return ( 
        <ProjectItem  id={idx}name={project.name} image={project.image}/>
        )
      })}
      </div>
    </div>
  )
}

export default Projects;
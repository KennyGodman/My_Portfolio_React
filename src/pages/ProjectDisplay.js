import React from 'react'
import {useParams} from "react-router-dom"
import FaGitHub from "react-icons"
import "../styles/ProjectDisplay.css"

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} />
        <p><b>Skills:</b> {project.skills}</p>
        <GitHubIcon />
    </div>
  )
}

export default ProjectDisplay;
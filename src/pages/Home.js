import React from 'react'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import{AiOutlineMail} from "react-icons/ai"
import "../styles/Home.css";

function Home () {
  return (
    <div className='home'>
      <div className='about'>
      <h2> Hi, My Name is Odubunmi Kehinde Daniel a.k.a Godman</h2></div>
      <div className='display'>
        <p>A software engineer who is interested in creating solutions to problems
        </p>
        <div className='stackImages'>
        <AiFillLinkedin />
        <AiOutlineMail />
        <AiFillGithub /></div>
      </div>
      <div className='skills'></div>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='stack'>
          <h2>Front-End</h2>
          <span>
            ReactJs, HTML, CSS, Javascript,Typescript,Tailwind, Bootstrap
          </span>
        </li>
        <li className='stack'>
        <h2>Back-End</h2>
          <span>
            Java, Python, Nodejs, MySQL, PostMan, MongoDB
          </span>
        </li>
        <li className='stack'>
        <h2>Languages</h2>
          <span>
            Java,Javascript,Python,React
          </span>
        </li>
        <li className='stack'>
        <h2>Frameworks</h2>
          <span>
            Springboot, Django, React
          </span>
        </li>
      </ol>
    </div>
  )
}

export default Home;
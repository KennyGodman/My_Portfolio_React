import React from 'react'
import {VerticalTimeLine,VerticalTimeLineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeLine lineColor="#3e497a">
        <VerticalTimeLineElement className="vertical-timeline-element-education" date="2010-2014"
        iconStyle={{background: "#3e497a", color:"#fff"}}
        icon={<SchoolIcon />}>

      <h3 className='vertical-timeline-element-title'>Josemaria High School,Lagos State, Nigeria.</h3>
      <p>Senior Secondary Certificate</p>

        </VerticalTimeLineElement>
        <VerticalTimeLineElement className="vertical-timeline-element-education" date="2014-2019"
        iconStyle={{background: "#3e497a", color:"#fff"}}
        icon={<SchoolIcon />}>

      <h3 className='vertical-timeline-elementtitle'>Obafemi Awolowo University,Osun State, Nigeria.</h3>
      <h4 className='vertical-timeline-elementsub-title'>
      Bachelor of Science
      </h4>
      <p>Urban and Regional Planning</p>
      
        </VerticalTimeLineElement>
        <VerticalTimeLineElement className="vertical-timeline-element-work" date="2020-til present"
        iconStyle={{background: "#3e497a", color:"#fff"}}
        icon={<WorkIcon />}>

      <h3 className='vertical-timeline-element-title'>Front End Engineer - SemicolonAfria
      </h3>
      <h4 className='vertical-timeline-elementsub-title'>
        Yaba, Lagos
      </h4>
      <p>I was part of the front-end tean that participated in working on different social projects.</p>
        </VerticalTimeLineElement> 

      </VerticalTimeLine>
    </div>
  )
}

export default Experience;
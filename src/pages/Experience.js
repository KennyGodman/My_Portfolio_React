import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { GiPostOffice } from "react-icons/gi";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#DE0202">
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2010-2014"
          iconStyle={{ background: "#4A4AFA", color: "#DE0202" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Josemaria High School,Lagos State, Nigeria.
          </h3>
          <p>Senior Secondary Certificate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-education"
          date="2014-2019"
          iconStyle={{ background: "#4A4AFA", color: "#DE0202" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-elementtitle">
            Obafemi Awolowo University Osun State, Nigeria.
          </h3>
          <h4 className="vertical-timeline-elementsub-title">
            Bachelor of Science
          </h4>
          <p>Urban and Regional Planning</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-work"
          date="2020-til present"
          iconStyle={{ background: "#4A4AFA", color: "#DE0202" }}
          icon={<GiPostOffice />}
        >
          <h3 className="vertical-timeline-element-title">
            Front End Engineer - SemicolonAfrica
          </h3>
          <h4 className="vertical-timeline-elementsub-title">Yaba, Lagos</h4>
          <p>
            I was part of the front-end team that participated in working on
            different social projects.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

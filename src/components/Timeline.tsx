import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2026 - Present"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faShieldHalved} />}
          >
            <h3 className="vertical-timeline-element-title">Founder</h3>
            <h4 className="vertical-timeline-element-subtitle">Trojan</h4>
            <p>
              Building Trojan, a security desktop tool that helps startups find vulnerabilities in their codebase. Trojan runs locally, scans code and dependencies for security issues, and uses an AI agent to pen-test running apps and explain what it finds in plain language.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2026 - Present"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Volta</h4>
            <p>
              Consulting for Volta's client businesses as a software developer. I work with each client to figure out the real problem behind their request, then design and build software that solves it.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder and Team Lead.</h3>
            <h4 className="vertical-timeline-element-subtitle">Collana</h4>
            <p>
              Founded Collana, a platform designed for students to find valuable internships and co-op opportunities. Leading a team of developers to build and scale the platform using React and Node.js.
              Active member of Black Business Institute in Atlantic Canada.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dalhousie Machine Learning Society.</h4>
            <p>
              Singlehandedly redesigned and developed the Dalhousie Machine Learning Society's website, implementing MPA architecture with asynchronous dashboard for content management.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Lead and Technical Director.</h3>
            <h4 className="vertical-timeline-element-subtitle">Chem-AR</h4>
            <p>
              Open-source educational software development utilizing Three.js for full-stack implementation. Led team initiatives and mentored junior developers while optimizing user experience. Currently used by professors at Dalhousie University.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">AN Zeph and Associates.</h4>
            <p>
              Developed and managed live legal assets management software for client law firm.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dalhousie Consulting Association</h4>
            <p>
              Developed full-stack website solution with integrated CMS architecture and enhanced user experience design.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sole Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Dalnotes</h4>
            <p>
              Architected open-source note repository platform for Dalhousie students with AWS S3 integration and full-stack implementation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#7c3aed', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sole Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">B-ANAN</h4>
            <p>
              Engineered Python-based revenue forecasting platform implementing multiple time series prediction models with comprehensive data analysis capabilities.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
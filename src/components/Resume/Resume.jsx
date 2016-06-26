//
//
//              Created by
//            __ _____ __    _____ _____    _____ _____    __ _____
//         __|  |  |  |  |  |   __|   | |  | __  |     |__|  |     |
//        |  |  |  |  |  |__|   __| | | |  |    -|  |  |  |  |  |  |
//        |_____|_____|_____|_____|_|___|  |__|__|_____|_____|_____|
//
//                on 29/03/2016
//                   isusk246@gmail.com
//
//

import React from "react";
import { connect } from "react-redux";

// SASS Stylesheets
import "./resume.scss";

function mapStateToProps(state) {
  return {
    Education: state._resume.education,
    Experience: state._resume.experience
  };
}

class Resume extends React.Component {
  render () {
    return (
        <section id="resume" className="section resume-section active" >
            <div className="container-fluid" >
              <div className="block timeline-block" >
                <div className="section-header" >
                  <h2>Education</h2>
                  <p>Take a look at the places where I've studied</p>
                </div>
                <ul className="timeline" >
                  {this.props.Education.map(this.renderEducation)}
                </ul>
              </div>
              <div className="block timeline-block experience-block" >
                <div className="section-header" >
                  <h2>My Experience</h2>
                  <p>Take a look at the places where I've worked</p>
                </div>
                <ul className="timeline" >
                  {this.props.Experience.map(this.renderExperience)}
                </ul>
              </div>

            </div>
        </section>
    )
  }

  renderEducation(qualification, idx) {
    return(
      <li key={idx}>
        <div className="timeline-content" >
          <h4>{qualification.institution}</h4>
          <span>{qualification.date}&nbsp;{qualification.title}</span>
          <p>{qualification.description}</p>
        </div>
      </li>
    );
  }

  renderExperience(job, idx) {
    return(
      <li key={idx}>
        <div className="timeline-content" >
          <h4>As&nbsp;{job.title}&nbsp;at&nbsp;{job.company}</h4>
          <span>{job.date}&nbsp;{job.place}</span>
          <p>{job.description}
          </p>
        </div>
      </li>
    );
  }
}

export default connect(
  mapStateToProps, {

    }
)(Resume);
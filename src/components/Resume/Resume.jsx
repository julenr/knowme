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

function mapStateToProps(state, ownProps) {
  return {

  };
}

class Resume extends React.Component {
  render () {
    return (
        <section id="resume" className="section resume-section active" >
            <div className="container-fluid" >
              <div className="block timeline-block" >
                <div className="section-header" >
                  <h2>My Education</h2>
                  <p>Take a look at the places where I"ve studied</p>
                </div>
                <ul className="timeline" >
                  <li>
                    <div className="timeline-content" >
                      <h4>CSS College</h4>
                      <span>Masters - 2014 to 2016</span>
                      <p>
                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-content" >
                      <h4>CSS College</h4>
                      <span>Masters - 2014 to 2016</span>
                      <p>
                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-content" >
                      <h4>CSS College</h4>
                      <span>Masters - 2014 to 2016</span>
                      <p>
                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="block timeline-block experience-block" >
                <div className="section-header" >
                  <h2>My Experience</h2>
                  <p>Take a look at the places where I"ve worked</p>
                </div>
                <ul className="timeline" >
                  <li>
                    <div className="timeline-content" >
                      <h4>CSS College</h4>
                      <span>Masters - 2014 to 2016</span>
                      <p>
                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-content" >
                      <h4>CSS College</h4>
                      <span>Masters - 2014 to 2016</span>
                      <p>
                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-content" >
                      <h4>CSS College</h4>
                      <span>Masters - 2014 to 2016</span>
                      <p>
                        Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="block testimonials-block" >
                <div className="section-header" >
                  <h2>Testimonials</h2>
                  <p>Take a look at what other people say about me</p>
                </div>
                <div className="testimonials-slider" >
                  <div className="testimonial" >
                    <div className="icon" >
                      <i className="ion-quote" ></i>
                    </div>
                    <div className="content" >
                      <p>
                        Cu illud lorem putent vel. Eum in movet nostrum referrentur. His ne tantas tractatos. Sit eu saperet anti opam scripserit. Ei albucius conse quuntur sea, no nominavi fabellas phaedrum his. Ei albucius consequ untur sea, no nominavi fabellas phaedrum his.
                      </p>
                      <div className="author-info" >
                        <h4>Jack Doe</h4>
                        <span>CEO at Google</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial" >
                    <div className="icon" >
                      <i className="ion-quote" ></i>
                    </div>
                    <div className="content" >
                      <p>
                        Cu illud lorem putent vel. Eum in movet nostrum referrentur. His ne tantas tractatos. Sit eu saperet anti opam scripserit. Ei albucius conse quuntur sea, no nominavi fabellas phaedrum his. Ei albucius consequ untur sea, no nominavi fabellas phaedrum his.
                      </p>
                      <div className="author-info" >
                        <h4>Jack Doe</h4>
                        <span>CEO at Google</span>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial" >
                    <div className="icon" >
                      <i className="ion-quote" ></i>
                    </div>
                    <div className="content" >
                      <p>
                        Cu illud lorem putent vel. Eum in movet nostrum referrentur. His ne tantas tractatos. Sit eu saperet anti opam scripserit. Ei albucius conse quuntur sea, no nominavi fabellas phaedrum his. Ei albucius consequ untur sea, no nominavi fabellas phaedrum his.
                      </p>
                      <div className="author-info" >
                        <h4>Jack Doe</h4>
                        <span>CEO at Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
    )
  }
}

export default connect(
  mapStateToProps, {

    }
)(Resume);
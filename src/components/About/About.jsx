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
import './about.scss';

function mapStateToProps(state, ownProps) {
  return {

  };
}

class About extends React.Component {
  render () {
    return (
        <section id="about" className="section about-section active" >
          <div className="container-fluid" >
            <div className="block about-block" >
              <div className="section-header" >
                <h2>About Me</h2>
                <p>I"m a good guy, not a bad guy</p>
              </div>
              <div className="row" >
                <div className="col-md-4" >
                  <ul className="info-list" >
                    <li>
                      <strong>Name:</strong>
                      <span>John Doe</span>
                    </li>
                    <li>
                      <strong>Job:</strong>
                      <span>Freelancer</span>
                    </li>
                    <li>
                      <strong>Age:</strong>
                      <span>26 Years</span>
                    </li>
                    <li>
                      <strong>Hometown:</strong>
                      <span>Dokri</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-8" >
                  <div className="about-text" >
                    <p>
                      Consul latine iudicabit eu vel. Cu has animal eru volupta tibus. Eu volumus explicari sed. Mel mutat vitupata susci piantur et, et fabellas explicari adipiscing quo. No dol em blandit theophrastus eos, nam eu per secuti repu dadae, duo hinc vide aliquip et. An has alterum nominavi. Nam at elitr veritus voluptaria. Cu eum regione tacimates vituperatoribus
                    </p>
                    <p>
                      Consul latine iudicabit eu vel. Cu has animal eru volupta tibus. Eu volumus explicari sed. Mel mutat vitupata susci piantur et, et fabellas explicari adipiscing quo. No dol em blandit theophrastus eos, nam eu per secuti repu dadae, duo hinc vide aliquip et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block services-block" >
              <div className="section-header" >
                <h2>My Services</h2>
                <p>I provide amazing and high quality services</p>
              </div>
              <div className="row" >
                <div className="col-md-4" >
                  <div className="service" >
                    <i className="icon-basic-photo" ></i>
                    <h4>Photography</h4>
                    <p>
                      Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui, mel affert doctus te.
                    </p>
                  </div>
                </div>
                <div className="col-md-4" >
                  <div className="service" >
                    <i className="icon-basic-keyboard" ></i>
                    <h4>Coding</h4>
                    <p>
                      Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui, mel affert doctus te.
                    </p>
                  </div>
                </div>
                <div className="col-md-4" >
                  <div className="service" >
                    <i className="ion-social-wordpress-outline" ></i>
                    <h4>WordPress</h4>
                    <p>
                      Nam reformidans vituper atori bus at. Id nisl diceret maiestatis qui, mel affert doctus te.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block skills-block" >
              <div className="section-header" >
                <h2>My Skills</h2>
                <p>I"ve got really amazing skills</p>
              </div>
              <div className="row" >
                <div className="col-md-6" >
                  <div className="skill" data-percent="85" >
                    <h4>HTML/CSS</h4>
                  </div>
                  <div className="skill" data-percent="95" >
                    <h4>jQuery</h4>
                  </div>
                  <div className="skill" data-percent="70" >
                    <h4>php</h4>
                  </div>
                </div>
                <div className="col-md-6" >
                  <div className="skill" data-percent="80" >
                    <h4>WordPress</h4>
                  </div>
                  <div className="skill" data-percent="85" >
                    <h4>JavaScript</h4>
                  </div>
                  <div className="skill" data-percent="70" >
                    <h4>SEO</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="block pricing-block" >
              <div className="section-header" >
                <h2>Pricing</h2>
                <p>I provide different packages for my services</p>
              </div>
              <div className="row" >
                <div className="col-md-4" >
                  <div className="p-table" >
                    <div className="header" >
                      <h4>Basic</h4>
                      <div className="price" >
                        <span className="currency" >$</span>
                        <span className="amount" >29</span>
                        <span className="period" >/hr</span>
                      </div>
                    </div>
                    <ul className="items" >
                      <li>
                        Web Designing
                      </li>
                      <li>
                        Web Development
                      </li>
                      <li>
                        App Development
                      </li>
                    </ul>
                    <a href="#" className="btn-material" >Sign Up</a>
                  </div>
                </div>
                <div className="col-md-4" >
                  <div className="p-table" >
                    <div className="header" >
                      <h4>Gold</h4>
                      <div className="price" >
                        <span className="currency" >$</span>
                        <span className="amount" >39</span>
                        <span className="period" >/hr</span>
                      </div>
                    </div>
                    <ul className="items" >
                      <li>
                        Web Designing
                      </li>
                      <li>
                        Web Development
                      </li>
                      <li>
                        App Development
                      </li>
                    </ul>
                    <a href="#" className="btn-material" >Sign Up</a>
                  </div>
                </div>
                <div className="col-md-4" >
                  <div className="p-table" >
                    <div className="header" >
                      <h4>Pro</h4>
                      <div className="price" >
                        <span className="currency" >$</span>
                        <span className="amount" >99</span>
                        <span className="period" >/hr</span>
                      </div>
                    </div>
                    <ul className="items" >
                      <li>
                        Web Designing
                      </li>
                      <li>
                        Web Development
                      </li>
                      <li>
                        App Development
                      </li>
                    </ul>
                    <a href="#" className="btn-material" >Sign Up</a>
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
)(About);
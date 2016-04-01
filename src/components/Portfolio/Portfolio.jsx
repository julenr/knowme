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
import "./portfolio.scss";

function mapStateToProps(state, ownProps) {
  return {

  };
}

class Portfolio extends React.Component {
  render () {
    return (
        <section id="portfolio" className="section portfolio-section active" >
          <div className="container-fluid" >
            <div className="block portfolio-block" >
              <div className="section-header" >
                <h2>Portfolio</h2>
                <p>See my latest projects Ive been working on</p>
              </div>
              <ul className="portfolio-filters" >
                <li>
                  <a href="#" className="active" data-group="all" >
                    All
                  </a>
                </li>
                <li>
                  <a href="#" data-group="web" >
                    Web
                  </a>
                </li>
                <li>
                  <a href="#" data-group="tech" >
                    Tech
                  </a>
                </li>
                <li>
                  <a href="#" data-group="photography" >
                    Photography
                  </a>
                </li>
              </ul>
              <ul className="portfolio-items" >
                <li data-groups="['tech']" >
                  <div className="inner" >
                    <img src={require('../../assets/images/1.jpg')} />
                      <div className="overlay" >
                        <a href="#popup-1" className="has-popup view-project" >
                          view project
                        </a>
                        <div id="popup-1" className="popup-box zoom-anim-dialog mfp-hide" >
                          <figure>
                            <img src={require('../../assets/images/1.jpg')} />
                          </figure>
                          <div className="content" >
                            <h4>My Project Title</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li data-groups="['photography', 'web']" >
                  <div className="inner" >
                    <img src={require('../../assets/images/2.jpg')} />
                      <div className="overlay" >
                        <a href="#popup-2" className="has-popup view-project" >
                          view project
                        </a>
                        <div id="popup-2" className="popup-box zoom-anim-dialog mfp-hide" >
                          <figure>
                            <img src={require('../../assets/images/2.jpg')} />
                          </figure>
                          <div className="content" >
                            <h4>My Project Title</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li data-groups="['tech'', 'web']" >
                  <div className="inner" >
                    <img src={require('../../assets/images/3.jpg')} />
                      <div className="overlay" >
                        <a href="#popup-3" className="has-popup view-project" >
                          view project
                        </a>
                        <div id="popup-3" className="popup-box zoom-anim-dialog mfp-hide" >
                          <figure>
                            <img src={require('../../assets/images/3.jpg')} />
                          </figure>
                          <div className="content" >
                            <h4>My Project Title</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li data-groups="['photography','tech']" >
                  <div className="inner" >
                    <img src={require('../../assets/images/4.jpg')} />
                      <div className="overlay" >
                        <a href="#popup-4" className="has-popup view-project" >
                          view project
                        </a>
                        <div id="popup-4" className="popup-box zoom-anim-dialog mfp-hide" >
                          <figure>
                            <img src={require('../../assets/images/4.jpg')} />
                          </figure>
                          <div className="content" >
                            <h4>My Project Title</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li data-groups="['web']" >
                  <div className="inner" >
                    <img src={require('../../assets/images/5.jpg')} />
                      <div className="overlay" >
                        <a href="#popup-5" className="has-popup view-project" >
                          view project
                        </a>
                        <div id="popup-5" className="popup-box zoom-anim-dialog mfp-hide" >
                          <figure>
                            <img src={require('../../assets/images/5.jpg')} />
                          </figure>
                          <div className="content" >
                            <h4>My Project Title</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
                <li data-groups="['photography']" >
                  <div className="inner" >
                    <img src={require('../../assets/images/6.jpg')} />
                      <div className="overlay" >
                        <a href="#popup-6" className="has-popup view-project" >
                          view project
                        </a>
                        <div id="popup-6" className="popup-box zoom-anim-dialog mfp-hide" >
                          <figure>
                            <img src={require('../../assets/images/6.jpg')} />
                          </figure>
                          <div className="content" >
                            <h4>My Project Title</h4>
                            <p>
                              Consul latine iudicabit eu vel. Cu has animal eruditi voluptatibus. Eu volumus explicari sed. Mel mutat vituperata suscipiantur et, et fabellas explicari adipiscing quo, no mucius euismod vis. Cu vim quem quod cibo.
                            </p>
                          </div>
                        </div>
                      </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
  }
}

export default connect(
  mapStateToProps, {

    }
)(Portfolio);
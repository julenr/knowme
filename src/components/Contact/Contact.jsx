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
import "./contact.scss";

function mapStateToProps(state, ownProps) {
  return {

  };
}

class Contact extends React.Component {
  render () {
    return (
        <section id="contact" className="section contact-section active" >
          <div className="container-fluid" >
            <div className="block contact-block" >
              <div className="section-header" >
                <h2>Contact Me</h2>
                <p>You can message me to discuss on a project or just to say hi</p>
              </div>
              <div className="row" >
                <div className="col-md-4 col-md-push-8" >
                  <div className="contact-info-icons" >
                    <div className="contact-info" >
                      <i className="ion-ios-location-outline" ></i>
                      <p>
                        1254 Patterson Street<br/>
                        Houston, TX 77025
                      </p>
                    </div>
                    <div className="contact-info" >
                      <i className="ion-ios-telephone-outline" ></i>
                      <p>
                        (+123) 713-295-4383<br/>
                        (+123) 913-295-2583
                      </p>
                    </div>
                    <div className="contact-info" >
                      <i className="ion-android-globe" ></i>
                      <p>
                        www.google.com<br/>
                        www.example.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-md-pull-4" >
                  <form className="contact-form" id="contact-form" method="post" data-toggle="validator" >
                    <div id="contact-form-result" ></div>
                    <div className="row" >
                      <div className="col-md-6" >
                        <div className="form-group" >
                          <input type="text" className="form-control" name="name" placeholder="Name" required />
                            <div className="help-block with-errors" ></div>
                        </div>
                      </div>
                      <div className="col-md-6" >
                        <div className="form-group" >
                          <input type="email" className="form-control" name="email" placeholder="Email" required />
                            <div className="help-block with-errors" ></div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group" >
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                        <div className="help-block with-errors" ></div>
                    </div>
                    <div className="form-group" >
                      <textarea className="form-control" placeholder="Message" name="message" rows="6" required></textarea>
                      <div className="help-block with-errors" ></div>
                    </div>
                    <div className="form-group text-center" >
                      <button type="submit" className="btn-material" >
                        Send Message
                      </button>
                    </div>
                  </form>
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
)(Contact);
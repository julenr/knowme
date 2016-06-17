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

// SASS Stylesheets
import "./contact.scss";

const Contact = (props) => {
  return (
      <section id="contact" className="section contact-section active" >
        <div className="container-fluid" >
          <div className="block contact-block" >
            <div className="section-header" >
              <h2>Get in touch and let's start something great together</h2>
            </div>
            <div className="row" >
              <div className="col-md-4 col-md-push-8" >
                <div className="contact-info-icons" >
                  <div className="contact-info" >
                    <i className="ion-ios-telephone-outline" />
                    <p>
                      (+64) 223-515-860<br/>
                    </p>
                  </div>
                  <div className="contact-info" >
                    <i className="ion-ios-at" ></i>
                    <p>
                      julen.rojo@gmail.com<br/>
                    </p>
                  </div>
                  <div className="contact-linkedin" >
                    <i className="ion-social-linkedin" />
                    <p>
                      julen.rojo@gmail.com
                    </p>
                  </div>
                  <div className="contact-github" >
                    <i className="ion-social-github" />
                    <p>
                      https://github.com/julenr
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
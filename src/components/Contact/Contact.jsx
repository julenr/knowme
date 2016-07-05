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

function mapStateToProps(state) {
  return {
    Contact: state._contact
  };
}


class Contact extends React.Component {
  render () {
    const {telephone, github, mail, linkedin, telephonetxt} = this.props.Contact;
    return (
      <section id="contact" className="section contact-section active">
        <div className="contact-flex-container" >
          <div className="section-header">
            <h1>Contact</h1>
            <p>Get in touch and let's start something great together</p>
          </div>
          <div className="contact-info-icons">
            <div className="contact-phone">
              <a href={`tel:${telephone}`} alt={telephonetxt} title={telephonetxt}>
                <i className="ion-iphone"/>
                PHONE
              </a>
            </div>
            <div className="contact-mail">
              <a href={`mailto:${mail}`} alt={mail} title={mail}>
                <i className="ion-android-mail"/>
                EMAIL
              </a>
            </div>
            <div className="contact-linkedin">
              <a href={linkedin} alt={linkedin} title={linkedin}>
                <i className="ion-social-linkedin"/>
                LINKEDIN
              </a>
            </div>
            <div className="contact-github">
              <a href={github} alt={github} title={github}>
                <i className="ion-social-github"/>
                GITHUB
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps, {

  }
)(Contact);
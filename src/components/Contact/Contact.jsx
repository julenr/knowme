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
    const {Telephone, Github, Mail, LinkedIn, TelephoneTxt} = this.props.Contact;
    return (
      <section id="contact" className="section contact-section active">
        <div className="contact-flex-container" >
          <div className="section-header">
            <h2>Get in touch and let's start something great together</h2>
          </div>
          <div className="contact-info-icons">
            <div className="contact-phone">
              <a href={`tel:${Telephone}`} alt={TelephoneTxt} title={TelephoneTxt}>
                <i className="ion-iphone"/>
              </a>
            </div>
            <div className="contact-mail">
              <a href={`mailto:${Mail}`} alt={Mail} title={Mail}>
                <i className="ion-android-mail"/>
              </a>
            </div>
            <div className="contact-linkedin">
              <a href={LinkedIn} alt={LinkedIn} title={LinkedIn}>
                <i className="ion-social-linkedin"/>
              </a>
            </div>
            <div className="contact-github">
              <a href={Github} alt={Github} title={Github}>
                <i className="ion-social-github"/>
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
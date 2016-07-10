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
      <section className="section">
        <div className="contact__flex-container" >
          <div className="section-header">
            <h1>Contact</h1>
            <p>Get in touch and let's start something great together</p>
          </div>
          <div className="contact-info-icons">
            <div className="contact-item">
              <a href={`tel:${telephone}`} alt={telephonetxt} title={telephonetxt}>
                <i className="ion-iphone"/>
                <div>PHONE</div>
                <div className="text-info">+64 223 515 860</div>
              </a>
            </div>
            <div className="contact-item">
              <a href={`mailto:${mail}`} alt={mail} title={mail}>
                <i className="ion-android-mail"/>
                <div>EMAIL</div>
                <div className="text-info">julen.wellington@gmail.com</div>
              </a>
            </div>
            <div className="contact-item">
              <a href={github} alt={github} title={github}>
                <i className="ion-social-github"/>
                <div>GITHUB</div>
                <div className="text-info">github.com/julenr</div>
              </a>
            </div>
            <div className="contact-item">
              <a href={linkedin} alt={linkedin} title={linkedin}>
                <i className="ion-social-linkedin"/>
                <div>LINKEDIN</div>
                <div className="text-info">www.linkedin.com/in/julenrojo</div>
              </a>
            </div>
          </div>
          <div className="centering-purpose">
            &nbsp;
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
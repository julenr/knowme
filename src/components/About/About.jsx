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
import { connect } from 'react-redux';

// SASS Stylesheets
import './about.scss';

function mapStateToProps(state, ownProps) {
  return {
    About: state._about
  };
}

class About extends React.Component {
  render() {
    const {aboutTitle, aboutIntro} = this.props.About;
    return (
      <section id="about" className="section about-section active">
        <div className="container-fluid">
          <div className="block about-block">
            <div className="section-header">
              <h2>{aboutTitle}</h2>
              <p>{aboutIntro}</p>
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
)(About);
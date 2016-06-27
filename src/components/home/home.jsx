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

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// SASS Stylesheets
import './home.scss';

function mapStateToProps(state, ownProps) {
  return {
    Home: state._home
  };
}

class Home extends React.Component {
  render() {
    const {introTitle, introSubTitle, cites, hireMe, downloadResume} = this.props.Home;
    return (
      <section id="home" className='section main-section active' >
        <div className="flex-container" >
          <div className="flex-avatar">
            <div className="avatar" />
          </div>
          <div className="text-col-main">
            <div className="intro-text-col">
              <div className="inner">
                <div className="intro-text">
                  <h1>{introTitle}</h1>
                  <span>{introSubTitle}</span>
                  <p>{cites[0]}</p>
                  <div className="intro-btns" >
                    <Link to="/contact" className="btn-material" data-section="contact" onClick={() => props.menuButtonClick()}>
                      {hireMe}
                    </Link>
                    <a href={require('../../assets/rojojulenresume.pdf')} download>
                      <div className="svg-wrapper">
                        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                          <rect className="shape" height="60" width="320" />
                        </svg>
                        <div className="text">{downloadResume}</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
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
)(Home);
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
      <section className='section main-section' >
        <div className="home__flex-container" >
          <div className="home__flex-avatar">
            <div className="home__flex-avatar__avatar" />
          </div>
          <div className="home__text-col-main">
            <div className="intro-text">
              <h1>{introTitle}</h1>
              <h2>{introSubTitle}</h2>
              <p>{cites[0]}</p>
            </div>
            <div className="intro-btns" >
              <a href={require('../../assets/rojojulenresume.pdf')} download>
                <div className="svg-wrapper">
                  <svg height="60" width="240">
                    <rect className="shape" height="60" width="240" />
                  </svg>
                  <div className="text">{downloadResume}</div>
                </div>
              </a>
              <Link to="/contact" onClick={() => props.menuButtonClick()}>
                <div className="svg-wrapper">
                  <svg height="60" width="240">
                    <rect className="shape" height="60" width="240" />
                  </svg>
                  <div className="text">{hireMe}</div>
                </div>
              </Link>
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
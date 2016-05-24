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

// SASS Stylesheets
import './home.scss';

function mapStateToProps(state, ownProps) {
  return {

  };
}

class Home extends React.Component {
  render() {
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
                  <h1>I'm Julen Rojo</h1>
                  <span>a JavaScript functional programmer</span>
                  <p>
                    "Sometimes, the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function."
                  </p>
                  <div className="intro-btns" >
                    <a href="#" className="btn-material" >
                      Hire Me
                    </a>
                    <a href="#" className="btn-material btn-secondary" >
                      Download Resume
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
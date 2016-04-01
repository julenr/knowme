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
import './menu.scss';

function mapStateToProps(state, ownProps) {
  return {

  };
}

class Menu extends React.Component {
  render() {
    return (
      <div className='menu' >
        <nav className="menu-items" >
          <ul>
            <li>
              <Link to="/" data-section="home" onClick={() => this.props.menuButtonClick()}>
                <i className="ion-ios-home-outline" ></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" data-section="about" onClick={() => this.props.menuButtonClick()}>
                <i className="ion-ios-person-outline" ></i>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/resume" data-section="resume" onClick={() => this.props.menuButtonClick()}>
                <i className="ion-ios-book-outline" ></i>
                <span>Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" data-section="portfolio" onClick={() => this.props.menuButtonClick()}>
                <i className="ion-ios-briefcase-outline" ></i>
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" data-section="contact" onClick={() => this.props.menuButtonClick()}>
                <i className="ion-ios-email-outline" ></i>
                <span>Contact Me</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(
  mapStateToProps, {

    }
)(Menu);
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
              <a href="#" data-section="home" >
                <i className="ion-ios-home-outline" ></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" data-section="about" >
                <i className="ion-ios-person-outline" ></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" data-section="resume" >
                <i className="ion-ios-book-outline" ></i>
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#" data-section="portfolio" >
                <i className="ion-ios-briefcase-outline" ></i>
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#" data-section="contact" >
                <i className="ion-ios-email-outline" ></i>
                <span>Contact Me</span>
              </a>
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
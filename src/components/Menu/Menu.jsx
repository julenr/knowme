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
import { Link } from 'react-router';

// SASS Stylesheets
import './menu.scss';

const Menu = (props) => {
  return (
    <div className='menu' >
      <nav className="menu-items" >
        <ul>
          <li>
            <Link to="/" data-section="home" onClick={() => props.menuButtonClick()}>
              <i className="ion-ios-home-outline" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/about" data-section="about" onClick={() => props.menuButtonClick()}>
              <i className="ion-ios-person-outline" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/resume" data-section="resume" onClick={() => props.menuButtonClick()}>
              <i className="ion-ios-book-outline" />
              <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" data-section="portfolio" onClick={() => props.menuButtonClick()}>
              <i className="ion-ios-briefcase-outline" />
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" data-section="contact" onClick={() => props.menuButtonClick()}>
              <i className="ion-ios-email-outline" />
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
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

import Menu from '../Menu';

function mapStateToProps(state) {
  return {

  };
}

class App extends React.Component {
  render() {
    return (
      <span className="show-menu">
        <div className='bg' ></div>
        <div className="main-content">
          <a href="#" className="menu-btn" >
            <span className="lines" >
              <span className="l1" ></span>
              <span className="l2" ></span>
              <span className="l3" ></span>
            </span>
          </a>
          <Menu />
          {this.props.children || 'Welcome to Careers NZ'}
        </div>
      </span>
    );
  }
}

export default connect(
  mapStateToProps, {
  }
)(App);


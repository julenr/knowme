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
import classNames from 'classnames';
import * as appActions from '../../redux/actions/app.actions';

// SASS Stylesheets
import './app.scss';

import Menu from '../Menu';

function mapStateToProps(state) {
  return {
    BurgerButtonActive: state._app.burgerButton
  };
}

class App extends React.Component {
  render() {
    let classes = classNames({
      'show-menu': this.props.BurgerButtonActive
    });
    return (
      <span className={ classes }>
        <Background />
        <div className="main-content">
          <MenuButton {...this.props}/>
          <Menu {...this.props}/>
          {this.props.children || 'Welcome to Careers NZ'}
        </div>
      </span>
    );
  }
}

const Background = () => {
  return (
    <div className="bg" />
    );
};

const MenuButton = (props) => {
  return (
    <a href="#" className="menu-btn" onClick={() => props.menuButtonClick()}>
      <span className="lines">
        <span className="l1" />
        <span className="l2" />
        <span className="l3" />
      </span>
    </a>
    );
};

export default connect(
  mapStateToProps, {
    ...appActions
  }
)(App);


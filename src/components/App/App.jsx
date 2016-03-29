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

function mapStateToProps(state) {
  return {

  };
}

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children || 'Welcome to Careers NZ'}

      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  {
  }
)(App);


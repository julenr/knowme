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

function mapStateToProps(state, ownProps) {
  return {

  };
}

class Home extends React.Component {
  render () {

    return (
      <div>
        MAIN PAGE
      </div>
    )
  }
}

export default connect(
  mapStateToProps, {
      ...actionCreators
    }
)(Home);
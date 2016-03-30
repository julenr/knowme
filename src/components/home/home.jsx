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

//import * as actionCreators from '../../redux/general-actions';


function mapStateToProps(state, ownProps) {
  return {

  };
}

class Home extends React.Component {
  render() {
    return (
      <section id="home" className='section main-section active' >
        <div className="row" >
          <div className="col-lg-6 col-md-5 col-xs-12 img-col-main">
            <div className="person-img" >
              <img src={require('../../assets/images/person.png')} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-7 col-xs-12 text-col-main">
            <div className="intro-text-col">
              <div className="inner">
                <div className="intro-text">
                  <h1>Im John Doe</h1>
                  <span>A friend, buddy and dude from earth</span>
                  <p>
                    Euismod consulatu eos eu. Vocent facilis sensibus vel ut, quo an nihil qualisque. Mea eu nulla prompta. Dicat velit at usum, malis euismod vim an
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
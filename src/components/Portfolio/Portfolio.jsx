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

import React from "react";
import { connect } from "react-redux";

// SASS Stylesheets
import "./portfolio.scss";

function mapStateToProps(state) {
  return {
    Portfolio: state._portfolio
  };
}

class Portfolio extends React.Component {
  componentDidMount(){
      var speed = 300;
      var easing = mina.backout;

      [].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
        var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
          pathConfig = {
            from : path.attr( 'd' ),
            to : el.getAttribute( 'data-path-hover' )
          };

        el.addEventListener( 'mouseenter', function() {
          path.animate( { 'path' : pathConfig.to }, speed, easing );
        } );

        el.addEventListener( 'mouseleave', function() {
          path.animate( { 'path' : pathConfig.from }, speed, easing );
        } );
      } );
  }

  render () {
    const {title} = this.props.Portfolio;
    return (
      <section id="portfolio" className="section portfolio-section active">
        <div className="portfolio-flex-container">
          <div className="section-header">
            <h2>{title}</h2>
          </div>
          <section id="grid" className="grid clearfix">
            <a href="#" data-path-hover="M 0,0 0,38 90,58 180.5,38 180,0 z">
              <figure>
                <img src={require('../../assets/images/1.png')} />
                <svg viewBox="0 0 180 320" preserveAspectRatio="none">
                  <path d="M 0 0 L 0 182 L 90 126.5 L 180 182 L 180 0 L 0 0 z "/>
                </svg>
                <figcaption>
                  <h2>Skills Transition Tool</h2>
                  <p>This website will help you find a course and a better job based on the skills you have and the things you want from work and study</p>
                  <button>View</button>
                </figcaption>
              </figure>
            </a>
            <a href="#" data-path-hover="M 0,0 0,38 90,58 180.5,38 180,0 z">
              <figure>
                <img src={require('../../assets/images/1.png')} />
                <svg viewBox="0 0 180 320" preserveAspectRatio="none">
                  <path d="M 0 0 L 0 182 L 90 126.5 L 180 182 L 180 0 L 0 0 z "/>
                </svg>
                <figcaption>
                  <h2>ACC Invoice Provider System</h2>
                  <p>Soko radicchio bunya nuts gram dulse.</p>
                  <button>View</button>
                </figcaption>
              </figure>
            </a>
            <a href="#" data-path-hover="M 0,0 0,38 90,58 180.5,38 180,0 z">
              <figure>
                <img src={require('../../assets/images/1.png')} />
                <svg viewBox="0 0 180 320" preserveAspectRatio="none">
                  <path d="M 0 0 L 0 182 L 90 126.5 L 180 182 L 180 0 L 0 0 z "/>
                </svg>
                <figcaption>
                  <h2>Crystalline</h2>
                  <p>Soko radicchio bunya nuts gram dulse.</p>
                  <button>View</button>
                </figcaption>
              </figure>
            </a>
            <a href="#" data-path-hover="M 0,0 0,38 90,58 180.5,38 180,0 z">
              <figure>
                <img src={require('../../assets/images/1.png')} />
                <svg viewBox="0 0 180 320" preserveAspectRatio="none">
                  <path d="M 0 0 L 0 182 L 90 126.5 L 180 182 L 180 0 L 0 0 z "/>
                </svg>
                <figcaption>
                  <h2>Crystalline</h2>
                  <p>Soko radicchio bunya nuts gram dulse.</p>
                  <button>View</button>
                </figcaption>
              </figure>
            </a>
          </section>
        </div>
      </section>
    );
  }
}

export default connect(
  mapStateToProps, {

  }
)(Portfolio);

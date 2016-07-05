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
import ReactDOM from 'react-dom';
import { connect } from "react-redux";

// SASS Stylesheets
import "./portfolio.scss";

function mapStateToProps(state) {
  return {
    Portfolio: state._portfolio
  };
}

class Portfolio extends React.Component {
  render () {
    const {portfolioTitle,  projects} = this.props.Portfolio;
    return (
      <section id="portfolio" className="section portfolio-section active">
        <div className="portfolio-flex-container">
          <div className="section-header">
            <h1>{portfolioTitle}</h1>
          </div>
          <section id="grid" className="grid clearfix">
            <h4>{projects.sectionTitle}</h4>
            {
              projects.collection.map((prj, idx) => <PortfolioProjectItem {...prj} key={idx}/>)
            }
          </section>
        </div>
      </section>
    );
  }

}
class PortfolioProjectItem extends React.Component {

  componentDidMount(){
    this.snapPath = Snap(ReactDOM.findDOMNode(this).querySelector('svg')).select('path');
    this.pathConfig = {
      from : this.snapPath.attr( 'd' ),
      to : 'M 0,0 0,78 90,98 180.5,78 180,0 z'
    };
  }

  render() {
    const {url, images, title, description} = this.props;
    const speed = 300;
    const easing = mina.backout;
    return (
      <a href={url} target="_blanc"
         onMouseEnter={ () => this.snapPath.animate( { 'path' : this.pathConfig.to }, speed, easing ) }
         onMouseLeave={ () => this.snapPath.animate( { 'path' : this.pathConfig.from }, speed, easing ) }
      >
        <figure>
          <img src={require(`../../assets/images/${images.root}-01-sm.png`)} width="180" height="320" />
          <svg viewBox="0 0 180 320" preserveAspectRatio="none">
            <path d="M 0 0 L 0 182 L 90 126.5 L 180 182 L 180 0 L 0 0 z "/>
          </svg>
          <figcaption>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>View</button>
          </figcaption>
        </figure>
      </a>
    );
  }
}

export default connect(
  mapStateToProps, {
  }
)(Portfolio);

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


if (__DEV__) {
  console.log('DEVELOPMENT ENVIRONMENT ACTIVATED');
}

// SASS Stylesheets
import './styles/screen.scss';
import './styles/ionicons/ionicons.scss';

// REACT Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js';

// REDUX STORE
import store from './redux/create-store';
import { Provider } from 'react-redux';

//CUSTOM COMPONENTS
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

// Element to attach React-DOM
const app = document.createElement('div');

document.body.appendChild(app);

ReactDOM.render((
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="/about" component={ About } />
        <Route path="/resume" component={ Resume } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/contact" component={ Contact } />
        <Route path="*" component={ Home }/>
      </Route>
    </Router>
  </Provider>
), app);





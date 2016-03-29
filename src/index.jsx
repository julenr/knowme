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


// REACT Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX STORE
import store from './redux/create-store';
import * as actionCreators from './redux/general-actions';

//CUSTOM COMPONENTS
import App from './components/App/App.jsx';
import Home from './components/Home';
import About from './components/About';

// Element to attach React-DOM
const app = document.createElement('div');

document.body.appendChild(app);

if(state._footerData.loaded){
  ReactDOM.render((
    <Provider store={ store }>
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About} />
        </Route>
      </Router>
    </Provider>
  ), app);
}




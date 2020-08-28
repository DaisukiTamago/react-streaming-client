import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Watch from './pages/Watch'
import './index.css'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/overview" component={Overview}/>
        <Route path="/watch" component={Watch}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

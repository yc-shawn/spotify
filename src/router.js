import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';
import Auth from './components/auth';

export default class RouterComponent extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <div class="body" style={{backgroundImage: `url('${env.assets}img/guitar-wallpaper.jpg')`}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
            <Route path="/about" component={About} />
          </div>
        </Switch>
      </Router>
    )
  }
}

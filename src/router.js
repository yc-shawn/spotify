import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Auth from './components/auth';
import Artist from './components/artist';
import Album from './components/album';
import Track from './components/track';

export default class RouterComponent extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <div class="body" style={{backgroundImage: `url('${env.assets}img/guitar-wallpaper.jpg')`}}>
          {/* <div class="body"> */}
            <Route exact path="/" component={Home} />
            <Route path="/:authstring" component={Auth} />
            <Route path="/auth" component={Auth} />
            <Route path="/artist" component={Artist} />
            <Route path="/album" component={Album} />
            <Route path="/track" component={Track} />
          </div>
        </Switch>
      </Router>
    )
  }
}

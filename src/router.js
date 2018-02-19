import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './components/home';
import About from './components/about';

export default class RouterComponent extends Component {

  render() {
    return (
      <Router>
        <div class="body" style={{backgroundImage: `url('${env.assets}img/guitar-wallpaper.jpg')`}}>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

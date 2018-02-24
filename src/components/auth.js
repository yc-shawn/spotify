import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Input, Select, Icon, Button } from 'antd';
const Search = Input.Search;
const Option = Select.Option;

import { setAuth, newAuth } from '../actions/auth.action';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {type: 'artist'}
    let searchDebounce;
  }
  componentWillMount(){
    let { setAuth, newAuth, location, history} = this.props;
    // let stateKey = 'spotify_auth_state';
    // let state = 'yc-shawn-spotify';
    // sessionStorage.setItem(stateKey, state);
    if (location.hash.length > 0){
      newAuth(location.hash);
    }
    history.replace('');
  }
  render(){
    return (
      <main>authing...</main>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {setAuth, newAuth})(Home);

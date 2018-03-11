import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Input, Select, Icon, Button } from 'antd';
const Search = Input.Search;
const Option = Select.Option;

import { setAuth, newAuth } from '../actions';

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    let { auth, newAuth, match, history} = this.props;
    if (!auth || !auth.access_token){
      let authString = match.params.authstring;
      if (authString.includes('yc-shawn-spotify')){
        newAuth(authString);
      }
      history.replace('');
    }
  }
  render(){
    return (
      <main style={{color: 'white'}}></main>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {newAuth})(Home);

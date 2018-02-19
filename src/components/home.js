import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { setAuth } from '../actions/auth.action';

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){

    var stateKey = 'spotify_auth_state';
    var state = 'yc-shawn-spotify';

    sessionStorage.setItem(stateKey, state);

    if (sessionStorage.yc_shawn_spotify){
      var authObj = JSON.parse(sessionStorage.yc_shawn_spotify);
      console.log('DO have auth:', authObj);
      setAuth(authObj);
    } else if (this.props.location.hash.length > 0){
      let hashs = this.props.location.hash.replace('#', '').split('&');
      let authObj = {};
      hashs.forEach((pair) => {
        let pairs = pair.split('=');
        authObj[pairs[0]] = pairs[1];
      })
      console.log('GET new auth:', authObj);
      this.props.history.replace('');
      sessionStorage.setItem('yc_shawn_spotify', JSON.stringify(authObj));
      setAuth(authObj);
    } else {
      // var scope = 'user-read-private user-read-email';
      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += '&client_id=' + encodeURIComponent(env.SPOTIFY_CLIENT_ID);
      // url += '&scope=' + encodeURIComponent(scope);
      url += '&redirect_uri=' + encodeURIComponent(env.SPOTIFY_REDIRECT_URL);
      url += '&state=' + encodeURIComponent(state);
      delete sessionStorage.yc_shawn_spotify;
      window.location = url;
    }

  }

  render(){
    return (
      <div>
        Home
      </div>
    )
  }
}

function mapStateToProps(state){
  return { example: state.example }
}

export default connect(mapStateToProps, {setAuth})(Home);

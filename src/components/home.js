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
    let stateKey = 'spotify_auth_state';
    let state = 'yc-shawn-spotify';
    sessionStorage.setItem(stateKey, state);
    if (sessionStorage.yc_shawn_spotify){
      setAuth(JSON.parse(sessionStorage.yc_shawn_spotify));
    } else if (location.hash.length > 0){
      console.log(location.hash);
      newAuth(location.hash);
      history.replace('');
    } else {
      // var scope = 'user-read-private user-read-email';
      var url = 'https://accounts.spotify.com/authorize';
      url += '?response_type=token';
      url += `&client_id=${encodeURIComponent(env.SPOTIFY_CLIENT_ID)}`;
      // url += '&scope=' + encodeURIComponent(scope);
      url += `&redirect_uri=${encodeURIComponent(env.SPOTIFY_REDIRECT_URL)}`;
      url += `&state=${encodeURIComponent(state)}`;
      delete sessionStorage.yc_shawn_spotify;
      window.location = url;
    }
  }
  onSearch(text){
    let { token_type, access_token} = this.props.auth;
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      axios.get('https://api.spotify.com/v1/search', {
        params: {
          type: this.state.type,
          q: this.refs.search.input.value
        },
        headers:{
          Authorization: `${token_type} ${access_token}`
        }
      }).then((res) => {
        console.log(res.data);
      });
    }, 333);
  }

  render(){
    return (
      <main class="homepage d-flex flex-column align-items-center justify-content-center">
        <img class="spotify-logo col-md-3 col-sm-6" src={`${env.assets}img/Spotify_logo_with_text.svg`} />
        <section class="search col-md-5">
          <Input ref="search" onChange={()=>this.onSearch()}
            addonBefore={
              <Select defaultValue={this.state.type} style={{ width: 90 }}
                onChange={type => this.setState({type})}>
                <Option value="artist">Artist</Option>
                <Option value="album">Album</Option>
                <Option value="track">Track</Option>
              </Select>
            }
            suffix={<Icon type="search" />}/>
        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {setAuth, newAuth})(Home);

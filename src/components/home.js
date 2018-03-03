import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { Input, Select, Icon, Button, List, Avatar } from 'antd';
const Search = Input.Search;
const Option = Select.Option;

import { setAuth, newAuth } from '../actions/auth.action';
import { setArtist } from '../actions/artist.action';
import { setAlbum } from '../actions/album.action';
import { setTrack } from '../actions/track.action';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {type: 'artist', list: []}
    let searchDebounce;
  }
  componentWillMount(){
    let { setAuth, newAuth, location, history} = this.props;
    let stateKey = 'spotify_auth_state';
    let state = 'yc-shawn-spotify';
    sessionStorage.setItem(stateKey, state);
    if (sessionStorage.yc_shawn_spotify){
      setAuth(JSON.parse(sessionStorage.yc_shawn_spotify));
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
    let { type } = this.state;
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      if (this.refs.search.input.value){
        axios.get('https://api.spotify.com/v1/search', {
          params: {
            type: type,
            q: this.refs.search.input.value
          }
        }).then((res) => {
          console.log(res.data);
          this.setState({list: res.data[`${type}s`].items})
        });
      } else {
        this.setState({list: []})
      }
    }, 333);
  }
  navigateTo(item){
    let { type } = this.state;
    let { setArtist, setAlbum, setTrack} = this.props;
    if (type === 'artist') setArtist(item.id);
    else if (type === 'album') setAlbum(item.id);
    else if (type === 'track') setTrack(item.id);
    this.props.history.push(type);
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
          {this.state.list && this.state.list.length > 0 ?
            <List
              class="search-result-list"
              dataSource={this.state.list}
              renderItem={item => (
                <List.Item key={item.id} onClick={()=>this.navigateTo(item)}>
                  <List.Item.Meta
                    avatar={item.images && item.images[0] ? <Avatar src={item.images[0].url} /> : null}
                    title={item.name}
                  />
                </List.Item>
              )}
            /> : null
          }
        </section>
      </main>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {
  setAuth,
  newAuth,
  setArtist,
  setAlbum,
  setTrack
})(Home);

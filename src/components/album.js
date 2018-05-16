import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios';

class Album extends Component {
  constructor(){
    super();
    this.state = {tracks: []};
  }
  componentWillMount(){
  }

  render(){
    let { album } = this.props;
    console.log('Album:', album);
    const ablumBG = album && album.images ? {backgroundImage: `url(${album.images[0].url})`} : {};
    console.log(ablumBG);
    return (
      <div class="album-page">
        <div class="album-bg" style={ablumBG}></div>
        <div>Album</div>
        <section class="album-panel container">
          <div>Artist Info</div>
          <div>Track Info</div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { album: state.album }
}

export default connect(mapStateToProps, {})(Album);

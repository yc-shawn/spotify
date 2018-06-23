import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
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
    return (
      <div class="album-page">
        <div class="album-bg" style={ablumBG}></div>
        <section class="album-panel container">
          { album && album.tracks && 
            <List
              size="large"
              bordered
              dataSource={album.tracks.items}
              renderItem={(item) => 
                <List.Item class="track-list-item">
                  <a href={item.external_urls.spotify} target="_blank">
                    <i class="fa fa-play-circle-o" aria-hidden="true"/>
                    <span>{item.name}</span> 
                  </a>
                </List.Item>
              }
            />
          }
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { album: state.album }
}

export default connect(mapStateToProps, {})(Album);

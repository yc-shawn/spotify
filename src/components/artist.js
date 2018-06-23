import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card } from 'antd';
const { Meta } = Card;
import axios from 'axios';
import { setAlbum } from '../actions';

class Artist extends Component {
  constructor(){
    super();
    this.state = {albums: []};
  }
  componentWillMount(){
  }
  toAlbum(id){
    this.props.setAlbum(id);
    this.props.history.push('album');
  }

  render(){
    let { artist } = this.props;
    console.log('artist:', artist);
    return (
      <div class="artist-page">
        <section class="container py-5 d-flex">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={artist.images && <img src={artist.images[0].url} />}
            class="artist-info"
          >
            <Meta
              title={artist.name}
            />
          </Card>

          <section class="artist-albums-container">
            <div class="artist-albums-list">
              { artist.albums && artist.albums.items.map(album =>
                  <Card
                    hoverable
                    class="album-card mb-3"
                    style={{ width: 240 }}
                    cover={album.images && <img src={album.images[0].url} />}
                    key={album.id}
                    onClick={() => this.toAlbum(album.id)}
                  > <Meta title={album.name} />
                  </Card>
                )
              }
            </div>
          </section>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { artist: state.artist }
}

export default connect(mapStateToProps, {setAlbum})(Artist);

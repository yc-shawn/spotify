import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card } from 'antd';
const { Meta } = Card;
import axios from 'axios';

class Artist extends Component {
  constructor(){
    super();
    this.state = {albums: []};
  }
  componentWillMount(){
    let { artist } = this.props;
    if (artist && artist.id){
      axios
        .get(`https://api.spotify.com/v1/artists/${artist.id}/albums`)
        .then((res) => {
          console.log(res.data);
        });
    }
  }

  render(){
    let { artist } = this.props;
    console.log('artist:', artist);
    return (
      <div class="artist-page container py-5 d-flex">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={artist.images && <img src={artist.images[0].url} />}
          class="artist-info"
        >
          <Meta
            title={artist.name}
            description="www.instagram.com"
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
                > <Meta title={album.name} />
                </Card>
              )
            }
          </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { artist: state.artist }
}

export default connect(mapStateToProps, {})(Artist);

import React, { Component } from 'react'
import { connect } from 'react-redux';

class Artist extends Component {
  constructor(){
    super();
  }

  render(){
    let { artist } = this.props;
    console.log(artist);
    return (
      <div>Artist</div>
    )
  }
}

function mapStateToProps(state){
  return { artist: state.artist }
}

export default connect(mapStateToProps, {})(Artist);

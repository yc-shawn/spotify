import React, { Component } from 'react'
import { connect } from 'react-redux';

class Album extends Component {
  constructor(){
    super();
  }

  render(){
    let { album } = this.props;
    console.log(album);

    return (
      <div>Album</div>
    )
  }
}

function mapStateToProps(state){
  return { album: state.album }
}

export default connect(mapStateToProps, {})(Album);

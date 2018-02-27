import React, { Component } from 'react'
import { connect } from 'react-redux';

class Album extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>Album</div>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {})(Album);

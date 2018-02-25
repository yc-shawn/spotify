import React, { Component } from 'react'
import { connect } from 'react-redux';

class Artist extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>Artist</div>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {})(Artist);

import React, { Component } from 'react'
import { connect } from 'react-redux';

class Track extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>Track</div>
    )
  }
}

function mapStateToProps(state){
  return { auth: state.auth }
}

export default connect(mapStateToProps, {})(Track);

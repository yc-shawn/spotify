import React, { Component } from 'react'
import { connect } from 'react-redux';

class Track extends Component {
  constructor(){
    super();
  }

  render(){
    let { track } = this.props;
    console.log(track);

    return (
      <div>Track</div>
    )
  }
}

function mapStateToProps(state){
  return { track: state.track }
}

export default connect(mapStateToProps, {})(Track);

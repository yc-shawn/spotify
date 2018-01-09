import React, { Component } from 'react';
import { connect } from 'react-redux';

import { exampleFunction } from '../actions/example.action';

class Home extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state){
  return { example: state.example }
}

export default connect(mapStateToProps, {exampleFunction})(Home);

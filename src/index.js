import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import promise from "redux-promise";
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

// Components
import RouterComponent from './router';
import reducers from './reducers';

// Styles
import 'antd/dist/antd.css';
import './styles/index.sass'

const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunkMiddleware
)(createStore);

class App extends Component {

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <RouterComponent />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

import { Provider, connect } from "react-redux";
import store from './store/Store';
import ReactDOM from "react-dom";
import App from './App'
import React from "react";

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById("root")
)  

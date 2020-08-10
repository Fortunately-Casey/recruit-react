import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./static/style/style.js";
import { Provider } from "react-redux";
import PageRouter from "./router";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
            <GlobalStyle></GlobalStyle>
            <PageRouter></PageRouter>
        </Fragment>
      </Provider>
    )
  } 
}

export default App;

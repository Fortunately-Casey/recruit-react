import React, { Component, Fragment } from "react";
import { GlobalStyle } from "./static/style/style.js";
import { Provider } from "react-redux";
import PageRouter from "./router";
import store from "./store";
import { Spin } from "antd";
class App extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    store.subscribe(() => {
      let storeState = store.getState();
      this.setState({
        loading: storeState.getIn(["news","pageLoading"])
      })
    })
  }
  render() {
    let { loading } = this.state
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle></GlobalStyle>
          <Spin spinning={loading}>
            <PageRouter></PageRouter>
          </Spin>
        </Fragment>
      </Provider>
    );
  }
}

export default App;

/**
 * 根路由
 */

import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//路由懒加载
import News from "../page/news/loadable";
import Login from "../page/login/loadable";

export default function Root() {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={News}></Route>
        <Route path="/login" exact component={Login}></Route>
      </Fragment> 
    </BrowserRouter>
  );
}

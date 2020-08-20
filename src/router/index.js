/**
 * 根路由
 */

import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//路由懒加载
import News from "../page/news/loadable";
import Login from "../page/login/loadable";
import Patriarch from "../page/patriarch/loadable";
import SchoolConfig from "../page/school-config/loadable";

export default function Root() {
  return (
    <BrowserRouter>
      <Fragment>
        <Route path="/" exact component={News}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/patriarch" component={Patriarch}></Route>
        <Route path="/schoolConfig" component={SchoolConfig}></Route>
      </Fragment> 
    </BrowserRouter>
  );
}

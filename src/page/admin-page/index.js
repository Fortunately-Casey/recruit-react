import React, { PureComponent } from "react";
import HeaderWapper from "../../common/header";
import UserInfo from "../../common/user-info";
import TabBar from "./components/tab-bar";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import { AdminPageWrapper, Top, Content } from "./style";
class AdminPage extends PureComponent {
  render() {
    return (
      <AdminPageWrapper>
        <Top>
          <HeaderWapper></HeaderWapper>
          <UserInfo></UserInfo>
        </Top>
        <Content>
          <BrowserRouter>
            <TabBar></TabBar>
            <Route
              exact
              path="/adminPage/articleList"
              // component={ConfigModule}
              key={1}
            ></Route>
            <Route
              path="/adminPage/schoolStatistics"
              exact
              // component={AccountConfig}
              key={2}
            ></Route>
            <Route
              path="/adminPage/addArticle"
              exact
              // component={AccountConfig}
              key={3}
            ></Route>
          </BrowserRouter>
        </Content>
      </AdminPageWrapper>
    );
  }
}

export default AdminPage;

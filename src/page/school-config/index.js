import React, { PureComponent } from "react";
import HeaderWapper from "../../common/header";
import UserInfo from "../../common/user-info";
import ConfigModule from "./components/config-module";
import AccountConfig from "./components/account-number";

import {
  BrowserRouter,
  Route,
  Redirect,
  Link,
  withRouter,
} from "react-router-dom";
import {
  SchoolConfigWrapper,
  SchoolConfigTop,
  SchoolConfigContent,
  TabBar,
  TabItem,
  OutputButton,
} from "./style";

class SchoolConfig extends PureComponent {
  toConfigModule() {
    this.props.history.push({
      pathname: "/schoolConfig/configModule",
    });
  }
  toAccountConfig() {
    this.props.history.push({
      pathname: "/schoolConfig/accountConfig",
    });
  }
  render() {
    return (
      <SchoolConfigWrapper>
        <SchoolConfigTop>
          <HeaderWapper></HeaderWapper>
          <UserInfo></UserInfo>
        </SchoolConfigTop>
        <SchoolConfigContent>
          <BrowserRouter>
            <TabBar>
              {/* <Link to={"/schoolConfig/configModule"}> */}
              <TabItem
                className="chosed"
                onClick={this.toConfigModule.bind(this)}
              >
                学校配置
              </TabItem>
              {/* </Link> */}
              {/* <Link to={"/schoolConfig/accountConfig"}> */}
              <TabItem onClick={this.toAccountConfig.bind(this)}>
                账号管理
              </TabItem>
              {/* </Link> */}
              <OutputButton>导出摸底情况</OutputButton>
            </TabBar>
            <Route
              exact
              path="/schoolConfig/configModule"
              component={ConfigModule}
              key={1}
            ></Route>
            <Route
              path="/schoolConfig/accountConfig"
              exact
              component={AccountConfig}
              key={2}
            ></Route>
            <Redirect to="/schoolConfig/configModule" />
          </BrowserRouter>
        </SchoolConfigContent>
      </SchoolConfigWrapper>
    );
  }
}
export default withRouter(SchoolConfig);

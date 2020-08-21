import React, { PureComponent } from "react";
import { withRouter, Link } from "react-router-dom";
import { Tabbar, TabItem, OutputButton } from "../../style";

class TabBar extends PureComponent {
  render() {
    return (
      <Tabbar>
        <Link to={"/schoolConfig/configModule"}>
          <TabItem className="chosed">学校配置</TabItem>
        </Link>
        <Link to={"/schoolConfig/accountConfig"}>
          <TabItem >账号管理</TabItem>
        </Link>
        <OutputButton>导出摸底情况</OutputButton>
      </Tabbar>
    );
  }
}

export default withRouter(TabBar);

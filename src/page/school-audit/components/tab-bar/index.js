import React, { PureComponent } from "react";
import { TabBarWrapper, TabItem, AddItem } from "../../style";
import { Link, withRouter } from "react-router-dom";
class TabBar extends PureComponent {
  render() {
    return (
      <TabBarWrapper>
        <Link to="/schoolAudit/auditList">
          <TabItem>已审核</TabItem>
        </Link>
        <Link to="/schoolAudit/savedList">
          <TabItem>未审核</TabItem>
        </Link>
        <AddItem></AddItem>
      </TabBarWrapper>
    );
  }
}

export default withRouter(TabBar);

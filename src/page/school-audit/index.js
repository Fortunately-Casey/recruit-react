import React, { PureComponent } from "react";
import HeaderWapper from "../../common/header";
import UserInfo from "../../common/user-info";
import { BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";
import AuditList from "./components/audit-list";
import SavedList from "./components/saved-list";
import TabBar from "./components/tab-bar";
import { SchoolAuditWrapper, Top, Content } from "./style";
class SchoolAudit extends PureComponent {
  render() {
    return (
      <SchoolAuditWrapper>
        <Top>
          <HeaderWapper></HeaderWapper>
          <UserInfo></UserInfo>
        </Top>
        <Content>
          <TabBar></TabBar>
          <BrowserRouter>
            <Route path="/schoolAudit/auditList" component={AuditList}></Route>
            <Route path="/schoolAudit/savedList" component={SavedList}></Route>
            <Redirect to="/schoolAudit/auditList"></Redirect>
          </BrowserRouter>
        </Content>
      </SchoolAuditWrapper>
    );
  }
}

export default withRouter(SchoolAudit);

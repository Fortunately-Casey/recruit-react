import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";
import { withRouter } from "react-router-dom";
import {
  ChildManageWrapper,
  Card,
  ApplyCode,
  ApplyInfo,
  Identity,
  Address,
  AddressItem,
  ApplySchool,
  AddCard,
} from "./style";
class ChildManage extends PureComponent {
  componentDidMount() {
    this.props.getChildList();
  }
  returnAuditStatus(status) {
    console.log(status);
    if (status === 0) {
      return "未审核";
    } else if (status === 1) {
      return "通过";
    } else if (status === 2) {
      return "未通过";
    }
  }
  addChild() {
    console.log(this.props.history);
    this.props.history.push({
      pathname: "/patriarch/addChild",
    });
  }
  returnChildList() {
    let { childrenList } = this.props;
    let childs = [];
    childrenList.map((item) => {
      return childs.push(
        <Card key={item}>
          <ApplyCode>
            <div className="name">预报名码</div>
            <div className="code">
              {item.get("forecastCode")}
              {!item.get("forecastCode") ? (
                <i className="iconfont">&#xe750;</i>
              ) : null}
            </div>
          </ApplyCode>
          <ApplyInfo>
            <Identity>
              <div className="left">
                <div className="left-logo1"></div>
              </div>
              <div className="right">
                <div className="name">
                  {item.get("name")}
                  <div className="audit-status">
                    {this.returnAuditStatus(item.get("auditStatus"))}
                  </div>
                </div>
                <div className="idCard">{item.get("idCard")}</div>
              </div>
            </Identity>
            <Address>
              <AddressItem>
                <div className="name">户口所在地：</div>
                <div className="value">
                  {item.get("provincesName") +
                    item.get("cityName") +
                    item.get("areaName")}
                </div>
              </AddressItem>
              <AddressItem>
                <div className="name">现居住地址：</div>
                <div className="value">{item.get("smallCommunityName")}</div>
              </AddressItem>
            </Address>
          </ApplyInfo>
          <ApplySchool>
            <div className="name">预报名学校：</div>
            <div className="value">{item.get("schoolName")}</div>
          </ApplySchool>
        </Card>
      );
    });
    return childs;
  }
  render() {
    return (
      <ChildManageWrapper>
        {this.returnChildList()}
        <AddCard onClick={this.addChild.bind(this)}>
          <div className="add-icon"></div>
          <div className="add-text">添加子女</div>
        </AddCard>
      </ChildManageWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  childrenList: state.getIn(["patriarch", "childrenList"]),
});

const mapDispatchToProps = (dispatch) => ({
  getChildList() {
    dispatch(actionCreaters.getChildList());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChildManage));

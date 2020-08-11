import React, { PureComponent } from "react";
import { connect } from "react-redux";
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
  componentDidMount() {}
  render() {
    return (
      <ChildManageWrapper>
        <Card>
          <ApplyCode>
            <div className="name">预报名码</div>
            <div className="code">0420200018</div>
          </ApplyCode>
          <ApplyInfo>
            <Identity>
              <div className="left">
                <div className="left-logo1"></div>
              </div>
              <div className="right">
                <div className="name">
                  冯云飞
                  <div className="audit-status">通过</div>
                </div>
                <div className="idCard">320623199509244538</div>
              </div>
            </Identity>
            <Address>
              <AddressItem>
                <div className="name">户口所在地：</div>
                <div className="value">北京市直辖区西城区</div>
              </AddressItem>
              <AddressItem>
                <div className="name">现居住地址：</div>
                <div className="value">南通市崇川区观音山街道</div>
              </AddressItem>
            </Address>
          </ApplyInfo>
          <ApplySchool>
            <div className="name">预报名学校：</div>
            <div className="value">东方小学</div>
          </ApplySchool>
        </Card>
        <AddCard>
          <div className="add-icon"></div>
          <div className="add-text">添加子女</div>
        </AddCard>
      </ChildManageWrapper>
    );
  }
}
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(ChildManage);

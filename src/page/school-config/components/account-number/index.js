import React, {
  PureComponent
} from "react";
import { withRouter } from "react-router-dom";

class AccountNumber extends PureComponent {
  toConfigModule() {
    this.props.history.push({
      pathname: "/schoolConfig/configModule",
    });
  }
  render() {
    return (<div onClick={this.toConfigModule.bind(this)}>
      账号管理
    </div>)
  }
}

export default withRouter(AccountNumber);
import React, {
  PureComponent
} from "react";
import { withRouter } from "react-router-dom";
class ConfigModule extends PureComponent {
  render() {
    return (<div>
      配置模块
    </div>)
  }
}

export default withRouter(ConfigModule);
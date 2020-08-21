import React, { PureComponent, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import { Tabbar, TabItem, OutputButton } from "../../style";
import { connect } from "react-redux";
import { actionCreaters } from "../../store";

class TabBar extends PureComponent {
  componentDidMount() {
    let { history, setRouterIndex, setIsShowConfig } = this.props;
    let schoolCode = window.localStorage.getItem("schoolCode");
    if (schoolCode === "04") {
      setIsShowConfig(false);
    } else {
      setIsShowConfig(true);
    }
    history.listen((event) => {
      let text = event.pathname;
      if (text === "/schoolConfig/configModule") {
        setRouterIndex(1);
      } else {
        setRouterIndex(2);
      }
    });
  }
  render() {
    const { routerIndex, isShowConfig } = this.props;
    return (
      <Tabbar>
        <Link to={"/schoolConfig/configModule"}>
          <TabItem className={routerIndex === 1 ? "chosed" : ""}>
            学校配置
          </TabItem>
        </Link>
        {isShowConfig ? (
          <Fragment>
            <Link to={"/schoolConfig/accountConfig"}>
              <TabItem className={routerIndex === 2 ? "chosed" : ""}>
                账号管理
              </TabItem>
            </Link>
            <OutputButton>导出摸底情况</OutputButton>
          </Fragment>
        ) : null}
      </Tabbar>
    );
  }
}
const mapStateToProps = (state) => ({
  routerIndex: state.getIn(["schoolConfig", "routerIndex"]),
  isShowConfig: state.getIn(["schoolConfig", "isShowConfig"]),
});

const mapDispatchToProps = (dispatch) => ({
  setRouterIndex(index) {
    dispatch(actionCreaters.setRouterIndex(index));
  },
  setIsShowConfig(isShow) {
    dispatch(actionCreaters.setIsShowConfig(isShow));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TabBar));

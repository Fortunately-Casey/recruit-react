import React, { PureComponent, Fragment } from "react";
import { Input, DatePicker, Select, Radio, Checkbox } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as api from "../../../../request/serviceList";
import http from "../../../../request/http";
import { Todate } from "../../../../common/util/util";

import {
  AddChildWrapper,
  AddMain,
  Bottom,
  MainLeft,
  MainRight,
  ForecastCode,
  StudentInfo,
  HouseInfo,
  PreschoolInfo,
  PatriachInfo,
  OtherInfo,
  ReportInfo,
} from "./style";
import { actionCreaters } from "../../store";
class AddChild extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      idCard: "",
      birthday: "",
      provinceID: "",
      provincesName: "",
      cityID: "",
      cityName: "",
      areaID: "",
      areaName: "",
      sex: 1,
      detailAddress: "",
      streetID: "",
      defaultStreet: {
        value: "",
      },
      communityId: "",
      smallCommunityID: "",
      smallCommunityName: "",
      schoolName: "",
      schoolLabel: "",
      schoolID: "",
      isDisableHasHouse: false,
      isShowAlternative: false,
      hasHouse: 1,
      alternativeSchoolID: "",
      houseNature: "",
      houseOwner: "",
      permitResidencePeriod:"",
      laborContractPeriod:""
    };
  }
  componentDidMount() {
    this.props.getProvinceArea(); //获取省
    this.props.getStreetList(); //获取街道
    this.props.getSchoolList(); //获取学校列表
  }
  nameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }
  idCardChange(e) {
    this.setState({
      idCard: e.target.value,
    });
  }
  birthdayChange(date) {
    this.setState({
      birthday: date,
    });
  }
  addressChange(e) {
    this.setState({
      detailAddress: e.target.value,
    });
  }
  sexChange(e) {
    this.setState({
      sex: e.target.value,
    });
  }
  // 选择省
  provinceChange(value) {
    this.setState({
      provinceID: value.value,
      provincesName: value.label,
    });
    this.props.getCityList(value.value);
  }
  // 选择市
  cityChange(value) {
    this.setState({
      cityID: value.value,
      cityName: value.label,
    });
    this.props.getAreaList(value.value);
  }
  //选择区/县
  areaChange(value) {
    this.setState({
      areaID: value.value,
      areaName: value.label,
    });
  }
  //选择街道
  streetChange(value) {
    this.setState({
      streetID: value.value,
    });
    this.props.getCommunity(value.value);
  }
  //选择社区
  communityChange(value) {
    this.setState({
      communityId: value.value,
    });
    this.props.getSmallCommunity(value.value);
  }
  //选择小区匹配学校
  smallCommunityChange(value) {
    console.log(value.value);
    this.setState(
      {
        smallCommunityID: value.value,
        smallCommunityName: value.label,
      },
      () => {
        http
          .get(api.GETSCHOOLBYSMALLCOMMUNITYID, {
            smallCommunityID: this.state.smallCommunityID,
            birthday: Todate(this.state.birthday),
          })
          .then((resp) => {
            console.log(resp.data);
            if (resp.data) {
              this.setState({
                schoolName: resp.data.schoolName,
                schoolLabel: resp.data.label,
                schoolID: resp.data.schoolID,
              });
              if (resp.data.schoolCode === "0401") {
                this.setState({
                  isDisableHasHouse: true,
                  isShowAlternative: true,
                  hasHouse: 1,
                });
              } else if (
                resp.data.schoolCode === "01" ||
                resp.data.schoolCode === "0402" ||
                resp.data.schoolCode === "0403" ||
                resp.data.schoolCode === "0404"
              ) {
                this.setState({
                  isDisableHasHouse: true,
                  isShowAlternative: false,
                  hasHouse: 1,
                });
              } else {
                this.setState({
                  isDisableHasHouse: false,
                  isShowAlternative: false,
                });
              }
            } else {
              this.setState({
                schoolName: "",
                isShowAlternative: false,
                alternativeSchoolID: "",
              });
              this.schoolName = "";
              this.isShowAlternative = false;
              this.alternativeSchoolID = "";
            }
          });
      }
    );
  }
  //选择是否有房产
  hasHouseChange(e) {
    this.setState({
      hasHouse: e.target.value,
    });
  }
  houseNatureChange(value) {
    this.setState({
      houseNature: value,
    });
  }
  returnOptions(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("id")} key={v}>
          {v.get("name")}
        </Option>
      );
    });
    return options;
  }
  returnStreet(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("streetID")} key={v}>
          {v.get("streetName")}
        </Option>
      );
    });
    return options;
  }
  returnCommunity(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("id")} key={v}>
          {v.get("name")}
        </Option>
      );
    });
    return options;
  }
  returnSchoolList(list) {
    const { Option } = Select;
    let options = [];
    list.map((v) => {
      return options.push(
        <Option value={v.get("schoolID")} key={v}>
          {v.get("schoolName")}
        </Option>
      );
    });
    return options;
  }
  render() {
    const { Option } = Select;
    const { TextArea } = Input;
    const {
      provinceList,
      cityList,
      areaList,
      streetList,
      communityList,
      smallCommunityList,
      schoolList,
    } = this.props;
    return (
      <AddChildWrapper>
        <AddMain>
          <MainLeft>
            <ForecastCode>
              <div className="header">
                预报名唯一码：
                <span style={{ fontSize: "18px", color: "#64B3ED" }}>
                  {22222}
                </span>
              </div>
            </ForecastCode>
            <StudentInfo>
              <div className="header">学生信息</div>
              <div className="personage-info">
                <div className="name">
                  <div className="label">姓名</div>
                  <Input
                    placeholder="请输入姓名"
                    value={this.state.name}
                    style={{ width: "200px" }}
                    onChange={this.nameChange.bind(this)}
                  />
                </div>
                <div className="idCard">
                  <div
                    className="label"
                    value={this.state.idCard}
                    onChange={this.idCardChange.bind(this)}
                  >
                    身份证号
                  </div>
                  <Input
                    placeholder="请输入身份证号"
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="birthday">
                  <div className="label">出生日期</div>
                  <DatePicker
                    value={this.state.birthday}
                    placeholder="请选择出生日期"
                    style={{ width: "200px" }}
                    onChange={this.birthdayChange.bind(this)}
                  />
                </div>
              </div>
              <div className="address-info">
                <div className="residence-info">
                  <div className="label">户口所在地</div>
                  <div className="address-select">
                    <Select
                      labelInValue
                      placeholder="选择省"
                      style={{ width: 150, marginRight: "20px" }}
                      onChange={this.provinceChange.bind(this)}
                    >
                      {this.returnOptions(provinceList)}
                    </Select>
                    <Select
                      labelInValue
                      placeholder="选择市"
                      style={{ width: 150, marginRight: "20px" }}
                      onChange={this.cityChange.bind(this)}
                    >
                      {this.returnOptions(cityList)}
                    </Select>
                    <Select
                      labelInValue
                      placeholder="选择区/县"
                      style={{ width: 150 }}
                      onChange={this.areaChange.bind(this)}
                    >
                      {this.returnOptions(areaList)}
                    </Select>
                    <Input
                      placeholder="请输入详细地址"
                      value={this.state.detailAddress}
                      onChange={this.addressChange.bind(this)}
                      style={{ marginTop: "15px", width: "490px" }}
                    />
                  </div>
                </div>
                <div className="sex-info">
                  <div className="label">性别</div>
                  <Radio.Group
                    onChange={this.sexChange.bind(this)}
                    value={this.state.sex}
                  >
                    <Radio value={1}>男</Radio>
                    <Radio value={2}>女</Radio>
                  </Radio.Group>
                </div>
              </div>
              <div className="now-address">
                <div className="housing-estate">
                  <div className="label">现居住小区</div>
                  <Select
                    labelInValue
                    placeholder="选择街道"
                    // defaultValue={this.state.defaultStreet}
                    onChange={this.streetChange.bind(this)}
                    style={{ width: 150, marginRight: "20px" }}
                  >
                    {this.returnStreet(streetList)}
                  </Select>
                  <Select
                    labelInValue
                    placeholder="选择社区"
                    // value={this.state.communityId}
                    onChange={this.communityChange.bind(this)}
                    style={{ width: 150, marginRight: "20px" }}
                  >
                    {this.returnCommunity(communityList)}
                  </Select>
                  <Select
                    labelInValue
                    placeholder="选择小区"
                    style={{ width: 150 }}
                    onChange={this.smallCommunityChange.bind(this)}
                  >
                    {this.returnCommunity(smallCommunityList)}
                  </Select>
                </div>
                <div className="apply-school">
                  <div className="label">预报名学校（系统自动生成）</div>
                  <Input
                    style={{ width: "200px" }}
                    value={this.state.schoolName}
                    disabled
                  />
                </div>
              </div>
              {this.state.isShowAlternative ? (
                <div className="alternative-school">
                  <div className="label">备选学校</div>
                  <Select
                    labelInValue
                    placeholder="备选学校"
                    value={this.state.alternativeSchoolID}
                    style={{ width: 150, marginRight: "20px" }}
                  >
                    {this.returnSchoolList(schoolList)}
                  </Select>
                </div>
              ) : null}
            </StudentInfo>
            <HouseInfo>
              <div className="header">房产/居住信息</div>
              <div className="house-property">
                <div className="has-house">
                  <div className="label">是否有房产</div>
                  <Radio.Group
                    onChange={this.hasHouseChange.bind(this)}
                    value={this.state.hasHouse}
                  >
                    <Radio value={1}>是</Radio>
                    <Radio value={2}>否</Radio>
                  </Radio.Group>
                </div>
                {this.state.hasHouse === 1 ? (
                  <Fragment>
                    <div className="house-nature">
                      <div className="label">房产性质</div>
                      <Select
                        placeholder="房产性质"
                        value={this.state.houseNature}
                        style={{ width: 150, marginRight: "20px" }}
                        onChange={this.houseNatureChange.bind(this)}
                      >
                        <Option value={1}>父母房产</Option>
                        <Option value={2}>祖父母房产</Option>
                        <Option value={3}>期房</Option>
                      </Select>
                    </div>
                    <div className="house-owner">
                      <div className="label">房产所有人</div>
                      <Input
                        style={{ width: "200px" }}
                        value={this.state.houseOwner}
                      />
                    </div>
                  </Fragment>
                ) : null}
                {this.state.hasHouse === 2 ? (
                  <Fragment>
                    <div className="live-date">
                      <div className="label">居住证有效期</div>
                      <DatePicker
                        placeholder="请选择居住证有效期"
                        style={{ width: "200px" }}
                      />
                    </div>
                    <div className="contract-date">
                      <div className="label">劳动合同期限</div>
                      <DatePicker
                        placeholder="请选择劳动合同期限"
                        style={{ width: "200px" }}
                      />
                    </div>
                  </Fragment>
                ) : null}
              </div>
              <div className="get-house">
                <div className="get-time">
                  <div className="label">取得/购买时间</div>
                  <DatePicker
                    placeholder="请选择取得/购买时间"
                    style={{ width: "200px" }}
                  />
                </div>
                <div className="house-code">
                  <div className="label">房产登记号/房产发票号</div>
                  <Input style={{ width: "200px" }} />
                </div>
                <div className="insurance-address">
                  <div className="label">养老保险所在地</div>
                  <Input style={{ width: "200px" }} />
                </div>
              </div>
            </HouseInfo>
            <PreschoolInfo>
              <div className="header">学前信息</div>
              <div className="school">
                <div className="school-name">
                  <div className="label">幼儿园名称</div>
                  <Input style={{ width: "200px" }} disabled />
                </div>
              </div>
            </PreschoolInfo>
          </MainLeft>
          <MainRight>
            <PatriachInfo>
              <div className="header">家长信息</div>
              <div className="parent">
                <div className="identity">
                  <div className="name">
                    <div className="label">姓名</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                  <div className="relation">
                    <div className="label">关系</div>
                    <Select
                      labelInValue
                      placeholder="关系"
                      style={{ width: 200 }}
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                    </Select>
                  </div>
                  <div className="idCard">
                    <div className="label">身份证号</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                </div>
                <div className="work-info">
                  <div className="phone">
                    <div className="label">联系电话</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                  <div className="work-address">
                    <div className="label">工作单位</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                </div>
              </div>
              <div className="parent">
                <div className="identity">
                  <div className="name">
                    <div className="label">姓名</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                  <div className="relation">
                    <div className="label">关系</div>
                    <Select
                      labelInValue
                      placeholder="关系"
                      style={{ width: 200 }}
                    >
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                    </Select>
                  </div>
                  <div className="idCard">
                    <div className="label">身份证号</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                </div>
                <div className="work-info">
                  <div className="phone">
                    <div className="label">联系电话</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                  <div className="work-address">
                    <div className="label">工作单位</div>
                    <Input style={{ width: "200px" }} />
                  </div>
                </div>
              </div>
            </PatriachInfo>
            <OtherInfo>
              <div className="header">其他</div>
              <div className="other-content">
                <div className="special-circumstances">
                  <div className="label">特殊情况</div>
                  <Radio.Group
                  // onChange={this.onChange}
                  // value={this.state.sex}
                  >
                    <Radio value={1} style={{ width: "100px", height: "30px" }}>
                      单亲家庭
                    </Radio>
                    <Radio value={2} style={{ width: "100px", height: "30px" }}>
                      孤儿
                    </Radio>
                    <Radio value={3} style={{ width: "100px", height: "30px" }}>
                      双胞胎
                    </Radio>
                    <Radio value={4} style={{ width: "100px", height: "30px" }}>
                      残疾
                    </Radio>
                    <Radio value={5} style={{ width: "100px", height: "30px" }}>
                      留守儿童
                    </Radio>
                    <Radio value={6} style={{ width: "100px", height: "30px" }}>
                      其他
                    </Radio>
                    <Radio value={7} style={{ width: "100px", height: "30px" }}>
                      无
                    </Radio>
                  </Radio.Group>
                </div>
                <div className="other-remark">
                  <div className="label">其他描述</div>
                  <TextArea style={{ width: "400px" }} rows={4} />
                </div>
              </div>
            </OtherInfo>
            <ReportInfo>
              <div className="header">报名承诺书</div>
              <div className="report-text">
                <p>
                  本人承诺：如有弄虚作假，提供虚假材料的，一经发现，对其已入学子女作退学或转学处理，由此产生的不良影响，本人愿意承担一切后果。
                </p>
                <Checkbox
                // onChange={onChange}
                >
                  <span>我已阅读并接受</span>
                </Checkbox>
              </div>
            </ReportInfo>
          </MainRight>
        </AddMain>
        <Bottom>
          <div className="save-button">保存</div>
          <div className="confirm-button">提交</div>
        </Bottom>
      </AddChildWrapper>
    );
  }
}
const mapStateToProps = (state) => ({
  provinceList: state.getIn(["patriarch", "provinceList"]),
  cityList: state.getIn(["patriarch", "cityList"]),
  areaList: state.getIn(["patriarch", "areaList"]),
  streetList: state.getIn(["patriarch", "streetList"]),
  communityList: state.getIn(["patriarch", "communityList"]),
  smallCommunityList: state.getIn(["patriarch", "smallCommunityList"]),
  schoolList: state.getIn(["patriarch", "schoolList"]),
});
const mapDispatchToProps = (dispatch) => ({
  getProvinceArea() {
    dispatch(actionCreaters.getProvinceArea());
  },
  getCityList(id) {
    dispatch(actionCreaters.getCityList(id));
  },
  getAreaList(id) {
    dispatch(actionCreaters.getAreaList(id));
  },
  getStreetList() {
    dispatch(actionCreaters.getStreetList());
  },
  getCommunity(id) {
    dispatch(actionCreaters.getCommunity(id));
  },
  getSmallCommunity(id) {
    dispatch(actionCreaters.getSmallCommunity(id));
  },
  getSchoolList() {
    dispatch(actionCreaters.getSchoolList());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddChild));

import * as constans from "./constans";
import * as api from "../../../request/serviceList";
import http from "../../../request/http";
import {
  message
} from "antd";

const setConfigs = (data) => {
  return {
    type: constans.SET_ALL_CONFIGS,
    configs: data
  }
}

const setStreetList = (list) => {
  return {
    type: constans.SET_STREETLIST,
    streetList: list
  }
}

const setBoundaryList = (list) => {
  return {
    type: constans.SET_BOUNDARYLIST,
    boundaryList: list
  }
}

const setCommunityList = (list) => {
  return {
    type: constans.SET_COMMUNITYLIST,
    communityList: list
  }
}


export const getConfig = () => {
  return (dispatch) => {
    http.get(api.GETSCHOOLCONFIG).then((resp) => {
      let res = resp.data;
      res.communityInformation.forEach((item, index) => {
        item.key = index;
      })
      dispatch(setConfigs(res))
    })
  }
}

export const setBirthday = (value) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_BIRTHDAY,
      birthday: value
    })
  }
}

export const setSchoolTime = (value) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_SCHOOLTIME,
      schoolTime: value
    })
  }
}

export const commitDate = (params) => {
  return (dispatch) => {
    http.post(api.SCHOOLINFORMATIONCONFIG, params).then((resp) => {
      if (resp.success) {
        message.success("提交成功");
        dispatch(getConfig())
      }
    })
  }
}

export const setSort = (value) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_SORT,
      sort: value
    })
  }
}

export const setLevel = (value) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_LEVEL,
      level: value
    })
  }
}

export const addLevel = (params) => {
  return (dispatch) => {
    http.post(api.INSERTLEVELCONFIG, params).then((resp) => {
      if (resp.success) {
        message.success("提交成功");
        dispatch(setSort(1))
        dispatch(setLevel(""))
        dispatch(getConfig())
      }
    })
  }
}

export const deleteLevel = (id) => {
  return (dispatch) => {
    http.delete(api.DELETELEVELCONFIG, {
      ID: id
    }).then((resp) => {
      if (resp.success) {
        message.success("删除成功");
        dispatch(getConfig())
      }
    })
  }
}

export const toggleIsShow = (isShow) => {
  return (dispatch) => {
    dispatch({
      type: constans.SET_ISSHOW_ADD,
      isShow: isShow
    })
  }
}

export const getStreetList = () => {
  return (dispatch) => {
    http.get(api.GETSTREETLIST).then(resp => {
      dispatch(setStreetList(resp.data))
    });
  }
}

export const getBoundaryList = () => {
  return (dispatch) => {
    http.get(api.GETBOUNDARYLIST).then(resp => {
      dispatch(setBoundaryList(resp.data))
    });
  }
}

export const getCommunityList = (id) => {
  return (dispatch) => {
    http.get(api.GETCOMMUNITYLIST, {
      streetID: id
    }).then(resp => {
      dispatch(setCommunityList(resp.data))
    });
  }
}

export const commitAdd = (params) => {
  return (dispatch) => {
    http.post(api.COMMUNITYCONFIG, params).then(resp => {
      if (resp.success) {
        message.success("提交成功");
        dispatch(toggleIsShow(false))
        dispatch(getConfig())
      }
    });
  }
}

export const toggleDelete = (isShow, deleteID) => {
  return (dispatch) => {
    dispatch({
      type: constans.TOGGLE_ISSHOW_DELETE,
      isShowDelete: isShow,
      deleteID: deleteID
    })
  }
}

export const deleteCommunity = (deleteID) => {
  return (dispatch) => {
    http.delete(api.DELETESMALLCOMMUNITY, {
      smallCommunityID: deleteID
    }).then((resp) => {
      if (resp.success) {
        dispatch(toggleDelete(false, ""));
        dispatch(getConfig());
      }
    })
  }
}
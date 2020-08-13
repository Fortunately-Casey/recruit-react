import * as api from "../../../request/serviceList";
import http from "../../../request/http";
import * as constans from "./constans";

const setChildList = (data) => {
  return {
    type: constans.SET_CHILD_LIST,
    list: data
  }
}

const setProvinceList = (data) => {
  return {
    type: constans.SET_PROVINCE_LIST,
    provinceList: data
  }
}

const setCityList = (data) => {
  return {
    type: constans.SET_CITY_LIST,
    cityList: data
  }
}

const setAreaList = (data) => {
  return {
    type: constans.SET_AREA_LIST,
    areaList: data
  }
}

const setStreetList = (data) => {
  return {
    type: constans.SET_STREET_LIST,
    streetList: data
  }
}

const setCommunity = (data) => {
  return {
    type: constans.SET_COMMUNITY_LIST,
    communityList: data
  }
}

const setSmallCommunity = (data) => {
  return {
    type: constans.SET_SMALLCOMMUNITY_LIST,
    smallCommunityList: data
  }
}

const setSchoolList = (data) => {
  return {
    type: constans.SET_SCHOOLLIST_LIST,
    schoolList: data
  }
}

/**
 * <-------------------------------- actions -------------------------------->
 */

export const getChildList = () => {
  return (dispatch) => {
    http.get(api.GETSTUDENTBYADMISSIONID, {}).then((resp) => {
      dispatch(setChildList(resp.data));
    })
  }
}

export const getProvinceArea = () => {
  return (dispatch) => {
    http.get(api.GETPROVINCEAREA, {}).then((resp) => {
      dispatch(setProvinceList(resp.data));
    })
  }
}

export const getCityList = (id) => {
  return (dispatch) => {
    http.get(api.GETCITYLIST, {
      parentID: id
    }).then((resp) => {
      dispatch(setCityList(resp.data));
    })
  }
}

export const getAreaList = (id) => {
  return (dispatch) => {
    http.get(api.GETCITYLIST, {
      parentID: id
    }).then((resp) => {
      dispatch(setAreaList(resp.data));
    })
  }
}

export const getStreetList = () => {
  return (dispatch) => {
    http.get(api.GETSTREETLIST, {}).then((resp) => {
      dispatch(setStreetList(resp.data));
    })
  }
}

export const getCommunity = (id) => {
  return (dispatch) => {
    http.get(api.GETCOMMUNITYLIST, {
      streetID: id
    }).then((resp) => {
      dispatch(setCommunity(resp.data));
    })
  }
}

export const getSmallCommunity = (id) => {
  return (dispatch) => {
    http.get(api.GETSMALLCOMMUNITYBYCOMMUNITYID, {
      communityID: id
    }).then((resp) => {
      dispatch(setSmallCommunity(resp.data));
    })
  }
}

export const getSchoolList = (id) => {
  return (dispatch) => {
    http.get(api.GETSCHOOLLIST, {}).then((resp) => {
      dispatch(setSchoolList(resp.data));
    })
  }
}





// export const changeLoginStatus = (isShow) => {
//   return (dispatch) => {
//     dispatch({
//       type:constans.CHANGE_LOGIN_STATUS,
//       isShowLogin:!isShow
//     })
//   }
// }

// export const changePageLoading = (loading) => {
//   return (dispatch) => {
//     dispatch({
//       type:constans.CHANGE_PAGE_LOADING,
//       loading: loading
//     })
//   }
// }
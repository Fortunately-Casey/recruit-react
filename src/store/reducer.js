import {
  combineReducers
} from "redux-immutable";

import {
  reducer as NewsReducer
} from '../page/news/store';
import {
  reducer as LoginReducer
} from '../page/login/store';
import {
  reducer as PatriarchReducer
} from '../page/patriarch/store';
import {
  reducer as SchoolConfigReducer
} from "../page/school-config/store";
import {
  reducer as AdminPageReducer
} from "../page/admin-page/store"

const reducer = combineReducers({
  news: NewsReducer,
  login: LoginReducer,
  patriarch: PatriarchReducer,
  schoolConfig: SchoolConfigReducer,
  adminPage: AdminPageReducer,
})

export default reducer;
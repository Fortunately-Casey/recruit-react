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

const reducer = combineReducers({
  news: NewsReducer,
  login: LoginReducer,
  patriarch: PatriarchReducer
})

export default reducer;
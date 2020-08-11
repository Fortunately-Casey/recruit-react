import {
  combineReducers
} from "redux-immutable";

import {
  reducer as NewsReducer
} from '../page/news/store';
import {
  reducer as LoginReducer
} from '../page/login/store';

const reducer = combineReducers({
  news: NewsReducer,
  login: LoginReducer
})

export default reducer;
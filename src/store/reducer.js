import {
  combineReducers
} from "redux-immutable";

import {
  reducer as NewsReducer
} from '../page/news/store';

const reducer = combineReducers({
  news: NewsReducer,
  // home: HomeReducer
})

export default reducer;
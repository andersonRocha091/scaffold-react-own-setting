import { combineReducers } from "redux";

import courses from "./CourseReducer";
import authors from "./AuthorReducer";
import apiCallsInProgress from "./ApiStatusReducers";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallsInProgress: apiCallsInProgress,
});

export default rootReducer;

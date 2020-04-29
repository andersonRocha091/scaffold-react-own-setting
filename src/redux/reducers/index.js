import { combineReducers } from "redux";

import courses from "./CourseReducer";
import authors from "./AuthorReducer";
import apiStatusReducers from "./ApiStatusReducers";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiStatusReducers: apiStatusReducers,
});

export default rootReducer;

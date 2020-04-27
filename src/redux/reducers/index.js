import { combinereducers } from "redux";

import courses from "./CourseReducer";

const rootReducer = combinereducers({
  courses: courses,
});

export default rootReducer;

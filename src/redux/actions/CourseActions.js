import ActionTypes from "./ActionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourse(course) {
  return { type: ActionTypes.CREATE_COURSE, course: course };
}

export function loadCourseSuccess(courses) {
  return {
    type: ActionTypes.LOAD_COURSES_SUCCESS,
    courses: courses,
  };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCourseSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

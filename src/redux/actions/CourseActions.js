import ActionTypes from "./ActionTypes";
import * as courseApi from "../../api/courseApi";

export function createCourseSuccess(course) {
  debugger;
  return { type: ActionTypes.CREATE_COURSE_SUCCESS, course: course };
}

export function updateCourseSuccess(course) {
  return { type: ActionTypes.UPDATE_COURSE_SUCCESS, course: course };
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

export function saveCourse(course, getState) {
  return function (dispatch) {
    return courseApi
      .saveCourse(course)
      .then((savedCourse) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}

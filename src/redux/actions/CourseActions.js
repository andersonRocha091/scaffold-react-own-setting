import ActionTypes from "./ActionTypes";

export function createCourse(course) {
  return { type: ActionTypes.CREATE_COURSE, course: course };
}

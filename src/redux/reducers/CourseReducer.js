import * as ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function courseReducer(state = InitialState.courses, action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case ActionTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case ActionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case ActionTypes.DELETE_COURSE_OPTIMISTIC:
      return state.filter((course) => course.id !== action.course.id);
    default:
      return state;
  }
}

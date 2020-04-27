import ActionTypes from "../actions/ActionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE:
      return [...state, { ...action.course }];
    case ActionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}

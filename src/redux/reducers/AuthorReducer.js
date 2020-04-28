import ActionTypes from "../actions/ActionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}

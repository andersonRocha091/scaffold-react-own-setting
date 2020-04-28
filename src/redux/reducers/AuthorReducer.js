import ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

export default function authorReducer(state = InitialState.authors, action) {
  switch (action.type) {
    case ActionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}

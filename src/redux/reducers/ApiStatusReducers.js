import ActionTypes from "../actions/ActionTypes";
import InitialState from "./InitialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = InitialState.apiCallsInProgress,
  action
) {
  if (action.type == ActionTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
}

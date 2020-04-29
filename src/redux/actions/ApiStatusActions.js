import * as ActionTypes from "./ActionTypes";

export function beginApiCall() {
  return { type: ActionTypes.BEGIN_API_CALL };
}

export function apiCallError() {
  return { type: ActionTypes.API_CALL_ERROR };
}

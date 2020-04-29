import * as ActionTypes from "./ActionTypes";

export function beginApiCall() {
  return { type: ActionTypes.BEGIN_API_CALL };
}

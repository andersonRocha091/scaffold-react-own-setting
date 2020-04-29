import ActionTypes from "./ActionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall } from "./ApiStatusActions";

export function loadAuthorSuccess(authors) {
  return {
    type: ActionTypes.LOAD_AUTHORS_SUCCESS,
    authors: authors,
  };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}

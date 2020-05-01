import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

export default function confugureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk) //warning e avisos sobre mudanças indevidas do state
  );
}

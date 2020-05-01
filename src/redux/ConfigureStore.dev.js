import { createStore, applyMiddleware, compose } from "redux";
import reduxImutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";

export default function confugureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //suporte ao dev tool do redux

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImutableStateInvariant())) //warning e avisos sobre mudanças indevidas do state
  );
}

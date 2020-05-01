import { createStore } from "redux";

import rootReducer from "./reducers";
import initialState from "./reducers/InitialState";
import * as courseActions from "./actions/CourseActions";

it("Should handle creating courses", () => {
  //arrange data
  const store = createStore(rootReducer, initialState);
  const course = { title: "Clean Code" };

  //act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  //assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});

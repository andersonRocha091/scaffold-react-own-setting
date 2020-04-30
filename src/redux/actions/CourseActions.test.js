import * as courseActions from "./CourseActions";
import * as ActionTypes from "./ActionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions execution", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should create a BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
    fetchMock.mock("*", {
      body: courses,
      headers: { "content-type": "application/json" },
    });

    const expectedActions = [
      { type: ActionTypes.BEGIN_API_CALL },
      { type: ActionTypes.LOAD_COURSES_SUCCESS, courses },
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(courseActions.loadCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

//Testando o actionCreator
describe("createCourseSuccess", () => {
  it("Should create a CREATE_COURSE_SUCCESS action", () => {
    //arrange
    const course = courses[0];
    const expectedAction = {
      type: ActionTypes.CREATE_COURSE_SUCCESS,
      course,
    };

    //act
    const action = courseActions.createCourseSuccess(course);

    expect(action).toEqual(expectedAction);
  });
});

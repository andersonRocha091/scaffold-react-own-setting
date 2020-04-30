import * as courseActions from "./CourseActions";
import * as ActionTypes from "./ActionTypes";
import { courses } from "../../../tools/mockData";

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

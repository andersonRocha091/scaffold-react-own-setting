import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as courseActions from "../../redux/actions/CourseActions";
import * as authorActions from "../../redux/actions/AuthorActions";

import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions
      .loadCourses()
      .then(() => {
        this.props.actions.loadAuthors().catch((error) => {
          alert("Load authors failed " + error);
        });
      })
      .catch((error) => {
        alert("Load courses failed " + error);
      });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
};

// Esta função determina que parte do estado será passada
// para o componente via props
const mapStateToProps = (state) => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find(
                (author) => author.id === course.authorId
              ).name,
            };
          }),
    authors: state.authors,
  };
};

//Esta função é usada para determinar que ações deverão ser
// expostas

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

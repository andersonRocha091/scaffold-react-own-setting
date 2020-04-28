import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadCourses } from "../../redux/actions/CourseActions";
import { loadAuthors } from "../../redux/actions/AuthorActions";

class ManageCoursePage extends Component {
  componentDidMount() {
    const { courses, authors, loadAuthors, loadCourses } = this.props;
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Load courses failed " + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Load authors failed " + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Manage Course</h2>
      </>
    );
  }
}

ManageCoursePage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
};

// Esta função determina que parte do estado será passada
// para o componente via props
const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    authors: state.authors,
  };
};

//Esta função é usada para determinar que ações deverão ser
// expostas

const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

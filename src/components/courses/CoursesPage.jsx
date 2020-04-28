import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as courseActions from "../../redux/actions/CourseActions";

import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
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
    courses: state.courses,
  };
};

//Esta função é usada para determinar que ações deverão ser
// expostas

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

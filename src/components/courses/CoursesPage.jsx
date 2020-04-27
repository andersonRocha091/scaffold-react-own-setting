import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as courseActions from "../../redux/actions/CourseActions";

class CoursesPage extends Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map((course) => (
          <div key={course.title}>{course.title}</div>
        ))}
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

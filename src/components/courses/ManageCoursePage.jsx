import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { loadCourses, saveCourse } from "../../redux/actions/CourseActions";
import { loadAuthors } from "../../redux/actions/AuthorActions";
import { newCourse } from "../../../tools/mockData";
import CourseForm from "./CourseForm";

function ManageCoursePage(props) {
  const {
    courses,
    authors,
    loadAuthors,
    loadCourses,
    saveCourse,
    history,
  } = props;
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const slug = props.match.params.slug;

  useEffect(() => {
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
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    debugger;
    // if (!formIsValid()) return;
    saveCourse(course).then(() => {
      history.push("/courses");
      toast.success("Course successfully saved.");
    });
  }

  return (
    <CourseForm
      course={course}
      onChange={handleChange}
      onSave={handleSubmit}
      errors={errors}
      authors={authors}
    />
  );
}

ManageCoursePage.propTypes = {
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

// Esta função determina que parte do estado será passada
// para o componente via props
const mapStateToProps = (state) => {
  return {
    courses: state.courses,
    authors: state.authors,
    course: newCourse,
  };
};

//Esta função é usada para determinar que ações deverão ser
// expostas

const mapDispatchToProps = {
  loadCourses: loadCourses,
  loadAuthors: loadAuthors,
  saveCourse: saveCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);

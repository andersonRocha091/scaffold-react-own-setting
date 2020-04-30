import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

import { loadCourses, saveCourse } from "../../redux/actions/CourseActions";
import { loadAuthors } from "../../redux/actions/AuthorActions";
import { newCourse } from "../../../tools/mockData";
import CourseForm from "./CourseForm";
import Spinner from "../common/Spinner";

export function ManageCoursePage(props) {
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
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("Load courses failed " + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch((error) => {
        alert("Load authors failed " + error);
      });
    }
  }, [props.course]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid() {
    const { title, authorId, category } = course;
    const errors = {};

    if (!title) errors.title = "Title is required.";
    if (!authorId) errors.author = "Author is required.";
    if (!category) errors.category = "Category is required.";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSaving(true);
    if (!formIsValid()) {
      setSaving(false);
      return;
    }
    saveCourse(course)
      .then(() => {
        history.push("/courses");
        toast.success("Course successfully saved.");
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <CourseForm
      course={course}
      onChange={handleChange}
      onSave={handleSubmit}
      errors={errors}
      saving={saving}
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

function getCourseBySlug(courses, slug) {
  return courses.find((course) => course.slug === slug || null);
}
// Esta função determina que parte do estado será passada
// para o componente via props
const mapStateToProps = (state, ownProps) => {
  const slug = ownProps.match.params.slug;
  const course =
    slug && state.courses.length > 0
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    courses: state.courses,
    authors: state.authors,
    course: course,
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

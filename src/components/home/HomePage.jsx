import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React and Redux Router for ultra-responsive web apps</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default Homepage;

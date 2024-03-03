import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About</h1>
      {/* Use NavLink to navigate to the Home page */}
      <NavLink to="/">Go to Home</NavLink>
    </div>
  );
}

export default About;

import React from "react";
import '../styles/About.css'
export const About = () => {
  return (
    <div className="about-us">
      <h1>About us</h1>
      <div className="about-text">
        This is a Search App for look movies info. We made it using React and
        TVmaze App. We only list the searched movies, if you want show more
        info, on the movie card you can click "go to details" for read the
        description and other information.
      </div>
    </div>
  );
};

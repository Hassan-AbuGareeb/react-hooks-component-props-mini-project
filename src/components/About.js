import React from "react";

const About = ({ logo = "https://via.placeholder.com/215", about }) => {
  return (
    <aside>
      <img src={logo} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;

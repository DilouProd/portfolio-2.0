import React from "react";
import Experience from "../components/knowleges/Experience";
import Hobbies from "../components/knowleges/Hobbies";
import Languages from "../components/knowleges/Languages";
import OtherSkills from "../components/knowleges/OtherSkills";
import Navigation from "../components/Navigation/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experience />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;

import React from "react";
import Skill from "./Skill";
import { useGetSkillsQuery } from "../../features/skillsApiSlice";
const Skills = () => {
   const { data } = useGetSkillsQuery();
   const content = (
      <div className="about__skills__main">
         <div className="about__skills__container">
            <h2>My Skills</h2>
         </div>
         <div className="about_skills__content__container">
            {data?.ids?.map((item, index) => (
               <Skill id={item} key={item} />
            ))}
         </div>
      </div>
   );
   return content;
};

export default Skills;

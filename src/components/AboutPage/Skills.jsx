import React from "react";
// import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { CircularProgress } from "@mui/joy";
const circularProgressData = [
   { value: 25, text: "React" },
   { value: 50, text: "JavaScript" },
   { value: 75, text: "HTML" },
   { value: 100, text: "CSS" },
   { value: 25, text: "ML" },
   { value: 50, text: "AI" },
   { value: 75, text: "HTML" },
];
const Skills = () => {
   const content = (
      <div className="about__skills__main">
         <div className="about__skills__container">
            <h2>My Skills</h2>
         </div>
         <div className="about_skills__content__container">
            {circularProgressData.map((item, index) => (
               <CircularProgress
                  //    color="white"
                  determinate
                  value={item.value}
                  sx={{
                     "--CircularProgress-size": "150px",
                     "--CircularProgress-progressColor": "#eb6b40",
                  }}
               >
                  {item.text}
               </CircularProgress>
            ))}
         </div>
      </div>
   );
   return content;
};

export default Skills;

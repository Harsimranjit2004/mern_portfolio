import React from "react";
import Hero from "../components/AboutPage/Hero";
import PersonalInfo from "../components/AboutPage/PersonalInfo";
import Skills from "../components/AboutPage/Skills";
import Education from "../components/AboutPage/Education";
const About = () => {
   const content = (
      <div className="about__page__main">
         <div className="parallel_image">
            <img
               src={"https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg"}
               alt="parallelimgae"
            />
         </div>
         <Hero />
         <PersonalInfo />
         <Skills />
         <Education />
      </div>
   );

   return content;
};

export default About;

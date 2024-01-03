import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useGetEducationQuery } from "../../features/educationApiSlice";
import EducationComponent from "./EducationComponent";

const Education = () => {
   const { data } = useGetEducationQuery();
   const content = (
      <div className="about__education__main">
         <div className="about__education__heading__container">
            <h1>Education and Experience</h1>
         </div>
         <div className="">
            <VerticalTimeline>
               {data?.ids?.map((item, index) => (
                  <EducationComponent key={item} id={item} />
               ))}
            </VerticalTimeline>
         </div>
      </div>
   );
   return content;
};

export default Education;

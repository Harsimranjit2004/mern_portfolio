import React from "react";
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const data = [
   {
      className: "vertical-timeline-element--education",
      date: "2020",
      iconStyle: { background: "#eb6b40", color: "#fff" },
      title: "High School",
      subtitle: "B.C.S internation school",
      description: "Subjects Studied: Math, Science",
      h1: "High School Diploma",
      p: "Graduated in 2020",
   },
   {
      className: "vertical-timeline-element--education",
      date: "2022",
      iconStyle: { background: "#eb6b40", color: "#fff" },
      title: "Senior Secondary",
      subtitle: "swami sant dass public school",
      description: "Subjects Studied: Math, Science",
      h1: "Senior Secondary Certificate",
      p: "Graduated in 2022",
   },
   {
      className: "vertical-timeline-element--education",
      date: "2023",
      iconStyle: { background: "#eb6b40", color: "#fff" },
      title: "Online Courses in Web Development",
      subtitle: "",
      description: "Course Details: Web Development",
      h1: "Certificate in Web Development",
      p: "Completed in 2023",
   },
   {
      className: "vertical-timeline-element--education",
      date: "Ongoing",
      iconStyle: { background: "#eb6b40", color: "#fff" },
      title: "Computer Programming in Seneca college",
      subtitle: "Ongoing",
      description:
         "Currently pursuing computer programming studies in Seneca college",
      h1: "In Progress",
      p: "Expected Completion Date: 2025",
   },
];

const Education = () => {
   const content = (
      <div className="about__education__main">
         <div className="about__education__heading__container">
            <h1>Education and Experience</h1>
         </div>
         <div>
            <VerticalTimeline>
               {data.map((item, index) => (
                  <VerticalTimelineElement
                     className={item.className}
                     iconStyle={item.iconStyle}
                     date={item.date}
                  >
                     <h3 className="vertical-timeline-element-title">
                        {item.title}
                     </h3>
                     <h4 className="vertical-timeline-element-subtitle">
                        {item.subtitle}
                     </h4>
                     <p>{item.p}</p>
                  </VerticalTimelineElement>
               ))}
            </VerticalTimeline>
         </div>
      </div>
   );
   return content;
};

export default Education;

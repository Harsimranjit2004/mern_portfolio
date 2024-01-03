import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { useGetEducationQuery } from "../../features/educationApiSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EducationComponent = ({ id }) => {
   const navigate = useNavigate();
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const { item } = useGetEducationQuery(undefined, {
      selectFromResult: ({ data }) => ({
         item: data?.entities[id],
      }),
   });
   const handleUpdateButton = () => {
      navigate(`/education/${id}`);
   };
   return (
      <VerticalTimelineElement
         className="vertical-timeline-element--education"
         iconStyle={item.iconStyle}
         date={item.date}
         dateClassName="date__color"
      >
         <h3 className="vertical-timeline-element-title">{item.title}</h3>
         <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
         <p>{item.p}</p>
         {isAuthenticated && (
            <button onClick={handleUpdateButton}>Update</button>
         )}
      </VerticalTimelineElement>
   );
};

export default EducationComponent;

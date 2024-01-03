import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
   useGetEducationQuery,
   useUpdateEducationMutation,
} from "../../features/educationApiSlice";

const UpdateEducation = () => {
   const [formData, setFormData] = useState({
      title: "",
      subtitle: "",
      date: "",
      heading: "",
      paragraph: "",
      description: "",
   });
   const { educationId } = useParams();
   const { education } = useGetEducationQuery(undefined, {
      selectFromResult: ({ data }) => ({
         education: data?.entities[educationId],
      }),
   });
   const [updateEducation] = useUpdateEducationMutation();
   useEffect(() => {
      if (education) {
         setFormData({ ...education });
      }
   }, [education]);
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      await updateEducation({ ...formData });
   };
   return (
      <div className="update__form">
         <form className="contact__form">
            <div className="contact__form" onSubmit={handleSubmit}>
               <div className="form__flex">
                  <label>Date:</label>
                  <input
                     type="text"
                     name="date"
                     className="form__input"
                     value={formData?.date}
                     onChange={handleChange}
                  />
               </div>
               <div className="form__flex">
                  <label>Title:</label>
                  <input
                     type="text"
                     name="title"
                     className="form__input"
                     value={formData.title}
                     onChange={handleChange}
                  />
               </div>
               <div className="form__flex">
                  <label>SubTitle:</label>
                  <input
                     type="text"
                     name="subtitle"
                     className="form__input"
                     value={formData.subtitle}
                     onChange={handleChange}
                  />
               </div>
               <div className="form__flex">
                  <label>Description:</label>
                  <input
                     type="text"
                     name="description"
                     className="form__input"
                     value={formData.description}
                     onChange={handleChange}
                  />
               </div>
               <div className="form__flex">
                  <label>Heading:</label>
                  <input
                     type="text"
                     name="heading"
                     className="form__input"
                     value={formData.heading}
                     onChange={handleChange}
                  />
               </div>
               <div>
                  <label>Paragraph:</label>
                  <input
                     type="text"
                     name="paragraph"
                     className="form__input"
                     value={formData.paragraph}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <button type="submit" className="form__button">
               Submit
            </button>
         </form>
      </div>
   );
};

export default UpdateEducation;

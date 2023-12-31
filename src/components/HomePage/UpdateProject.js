import React, { useEffect, useState } from "react";
import {
   useGetProjectQuery,
   useUpdateProjectMutation,
} from "../../features/projectApiSlice";
import { useParams } from "react-router-dom";

const UpdateProject = () => {
   const { projectId } = useParams();
   const { project } = useGetProjectQuery(undefined, {
      selectFromResult: ({ data }) => ({
         project: data?.entities[projectId],
      }),
   });
   const [updateProject] = useUpdateProjectMutation();
   useEffect(() => {
      if (project) {
         setFormData({ ...project });
      }
   }, [project]);
   const [formData, setFormData] = useState({});
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      await updateProject({ ...formData });
   };
   const content = (
      <div className="update__form">
         <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__flex">
               <label>
                  Title:
                  <input
                     type="text"
                     name="title"
                     className="form__input"
                     value={formData.title}
                     onChange={handleChange}
                  />
               </label>
            </div>
            <div className="form__flex">
               <label>
                  Description:
                  <input
                     type="text"
                     name="description"
                     className="form__input"
                     value={formData.title}
                     onChange={handleChange}
                  />
               </label>
            </div>
            <div className="form__flex">
               <label>
                  ProjectLink:
                  <input
                     type="text"
                     name="projectLink"
                     className="form__input"
                     value={formData.projectLink}
                     onChange={handleChange}
                  />
               </label>
            </div>
            <div className="form__flex">
               <label>
                  CodeLink:
                  <input
                     type="text"
                     name="codeLink"
                     className="form__input"
                     value={formData.codeLink}
                     onChange={handleChange}
                  />
               </label>
            </div>
            <div className="form__flex">
               <label>
                  ImageUrl:
                  <input
                     type="text"
                     name="imageUrl"
                     className="form__input"
                     value={formData.imageUrl}
                     onChange={handleChange}
                  />
               </label>
            </div>
            <button type="submit" className="form__button">
               Submit
            </button>
         </form>
      </div>
   );
   return content;
};

export default UpdateProject;

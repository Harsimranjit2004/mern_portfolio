import React, { useState } from "react";
import {
   useAddNewNoteMutation,
   useUpdateProjectMutation,
} from "../../features/projectApiSlice";

const Project = () => {
   const [addNewNote] = useAddNewNoteMutation();
   const [formData, setFormData] = useState({
      title: "",
      description: "",
      projectLink: "",
      codeLink: "",
      imageUrl: "",
      tags: "",
   });
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("sendinggs");
      console.log(formData);
      await addNewNote({ ...formData });
   };
   const handleTags = (event) => {
      const tagsString = event.target.value;
      const tagsArray = tagsString.split(",").map((tag) => tag.trim());
      setFormData({ ...formData, tags: tagsArray });
   };
   const content = (
      <div>
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
                     value={formData.description}
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
            <div className="form__flex">
               <label>
                  Tags:
                  <input
                     type="text"
                     name="tags"
                     className="form__input"
                     value={formData.tags ? formData.tags.join(",") : ""}
                     onChange={handleTags}
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

export default Project;

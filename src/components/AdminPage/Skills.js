import React, { useState } from "react";
import { useAddNewSkillsMutation } from "../../features/skillsApiSlice";

const Skills = () => {
   const [addNewSkills] = useAddNewSkillsMutation();
   const [formData, setFormData] = useState();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      await addNewSkills({ ...formData });
   };
   return (
      <form className="contact__form" onSubmit={handleSubmit}>
         <div className="form__flex">
            <label>
               Text:
               <input
                  type="text"
                  name="text"
                  className="form__input"
                  value={formData?.text}
                  onChange={handleChange}
               />
            </label>
         </div>
         <div className="form__flex">
            <label>
               Value:
               <input
                  type="text"
                  name="value"
                  className="form__input"
                  value={formData?.value}
                  onChange={handleChange}
               />
            </label>
         </div>
         <button type="submit" className="form__button">
            Submit
         </button>
      </form>
   );
};

export default Skills;

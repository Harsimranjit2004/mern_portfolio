import { useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useUpdateInterestMutation } from "../../features/interestApiSlice";

const Interest = () => {
   const [formData, setFormData] = useState();
   const [updateInterest] = useUpdateInterestMutation();
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
      await updateInterest({ ...formData });
   };
   return (
      <form className="contact__form" onSubmit={handleSubmit}>
         <div className="form__flex">
            <label>
               Title:
               <input
                  type="text"
                  name="title"
                  className="form__input"
                  value={FormData.title}
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
                  value={FormData.description}
                  onChange={handleChange}
               />
            </label>
         </div>
         <div className="form__flex">
            <label>
               Icon:
               <input
                  type="text"
                  name="icon"
                  className="form__input"
                  value={FormData.icon}
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

export default Interest;

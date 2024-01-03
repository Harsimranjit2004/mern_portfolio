import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
   useGetInterestQuery,
   useUpdateInterestMutation,
} from "../../features/interestApiSlice";

const UpdateInterest = () => {
   const [formData, setFormData] = useState({
      title: "",
      description: "",
      icon: "",
   });
   const { interestId } = useParams();
   const { interest } = useGetInterestQuery(undefined, {
      selectFromResult: ({ data }) => ({
         interest: data?.entities[interestId],
      }),
   });
   const [updateInterest] = useUpdateInterestMutation();
   useEffect(() => {
      if (interest) {
         setFormData({ ...interest });
      }
   }, [interest]);
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      await updateInterest({ ...formData });
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
                     value={formData.description}
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
                     value={formData.icon}
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

export default UpdateInterest;

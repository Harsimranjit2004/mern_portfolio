// ResponsiveForm.js

import React, { useState } from "react";
import {
   useGetUserInfoQuery,
   useUpdateUserInfoMutation,
} from "../../features/userInfoApiSlice";
// import "./ResponsiveForm.css";

const ResponsiveForm = ({ id }) => {
   const { userInfo } = useGetUserInfoQuery("userInfoList", {
      selectFromResult: ({ data }) => ({
         userInfo: data?.entities[id],
      }),
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
   });
   const [updateUserInfo, { isLoading, isSuccess, isError, error }] =
      useUpdateUserInfoMutation();
   console.log(userInfo);
   const [formData, setFormData] = useState({ ...userInfo });

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
      await updateUserInfo({ ...formData });
   };

   return (
      <form className="contact__form" onSubmit={handleSubmit}>
         <div className="form__flex">
            <label>
               Name:
               <input
                  type="text"
                  name="name"
                  className="form__input"
                  value={formData.name}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Email:
               <input
                  type="email"
                  name="email"
                  className="form__input"
                  value={formData.email}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Phone:
               <input
                  type="text"
                  name="phone"
                  className="form__input"
                  value={formData.phone}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Place:
               <input
                  type="text"
                  name="place"
                  className="form__input"
                  value={formData.place}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Instagram:
               <input
                  type="text"
                  name="instagram"
                  className="form__input"
                  value={formData.instagram}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Github:
               <input
                  type="text"
                  name="github"
                  className="form__input"
                  value={formData.github}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               LinkedIn:
               <input
                  type="text"
                  name="linkedin"
                  className="form__input"
                  value={formData.linkedin}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Age:
               <input
                  type="text"
                  name="age"
                  className="form__input"
                  value={formData.age}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Freelance:
               <input
                  type="text"
                  name="freelance"
                  className="form__input"
                  value={formData.freelance}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Projects:
               <input
                  type="text"
                  name="projects"
                  className="form__input"
                  value={formData.projects}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Experience:
               <input
                  type="text"
                  name="experience"
                  className="form__input"
                  value={formData.experience}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Awards:
               <input
                  type="text"
                  name="awards"
                  className="form__input"
                  value={formData.awards}
                  onChange={handleChange}
               />
            </label>
         </div>

         <div className="form__flex">
            <label>
               Roles:
               <input
                  type="text"
                  name="roles"
                  className="form__input"
                  value={formData.roles}
                  onChange={handleChange}
               />
            </label>
         </div>

         {/* <div className="form__flex"> */}
         <button type="submit" className="form__button">
            Submit
         </button>
         {/* </div> */}
      </form>
   );
};

export default ResponsiveForm;
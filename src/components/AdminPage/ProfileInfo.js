import React, { useEffect, useState } from "react";
import {
   useGetUserInfoQuery,
   useUpdateUserInfoMutation,
} from "../../features/userInfoApiSlice";

const ResponsiveForm = ({ id }) => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      place: "",
      instagram: "",
      github: "",
      linkedin: "",
      age: "",
      freelance: "",
      projects: "",
      experience: "",
      awards: "",
      roles: "",
      image1: null, // Assuming this is a file input
      image2: null,
      image3: null,
      aboutheading: "",
      about: "",
      homeabout: "",
   });
   const { userInfo } = useGetUserInfoQuery("userInfoList", {
      selectFromResult: ({ data }) => ({
         userInfo: data?.entities[id],
      }),
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
   });
   const [updateUserInfo] = useUpdateUserInfoMutation();
   useEffect(() => {
      if (userInfo) {
         setFormData({ ...userInfo });
      }
   }, [userInfo]);
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
      <>
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
            <div className="form__flex">
               <label>
                  Image 1:
                  <input
                     type="file"
                     name="image1"
                     accept="image/*"
                     onChange={(e) => handleImageChange(e, setImage1)}
                  />
               </label>
            </div>

            <div className="form__flex">
               <label>
                  Image 2:
                  <input
                     type="file"
                     name="image2"
                     accept="image/*"
                     onChange={(e) => handleImageChange(e, setImage2)}
                  />
               </label>
            </div>

            <div className="form__flex">
               <label>
                  Image 3:
                  <input
                     type="file"
                     name="image3"
                     accept="image/*"
                     onChange={(e) => handleImageChange(e, setImage3)}
                  />
               </label>
            </div>
            <div className="form__flex">
               <label>HomeAbout heading</label>
               <input
                  type="text"
                  name="aboutheading"
                  className="form__input"
                  value={formData.aboutheading}
                  onChange={handleChange}
               />
            </div>
            <div className="form__flex">
               <label>HomeAbout</label>
               <input
                  type="text"
                  name="homeabout"
                  className="form__input"
                  value={formData.homeabout}
                  onChange={handleChange}
               />
            </div>
            <div className="form__flex">
               <label>About </label>
               <input
                  type="text"
                  name="about"
                  className="form__input"
                  value={formData.about}
                  onChange={handleChange}
               />
            </div>
            <button type="submit" className="form__button">
               Submit
            </button>
         </form>
      </>
   );
};

export default ResponsiveForm;

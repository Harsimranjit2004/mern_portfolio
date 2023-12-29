import { faMailForward, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useGetUserInfoQuery } from "../../features/userInfoApiSlice";
import emailjs from "@emailjs/browser";
const Form = ({ id }) => {
   // const form = useRef();
   const { userInfo } = useGetUserInfoQuery("userInfoList", {
      selectFromResult: ({ data }) => ({
         userInfo: data?.entities[id],
      }),
   });
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });
   const [isFormSubmitted, setFormSubmitted] = useState(false);
   const { name, email, message } = formData;
   const handleChangeInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };
   const handleSubmit = (e) => {
      emailjs
         .send(
            "service_8kx7urm",
            "template_u9un828",
            {
               name: name,
               email: email,
               message: message,
            },
            "Fq-G2rAw8ISSh-66I"
         )
         .then((reslut) => {
            console.log(reslut.text);
         });
      setFormSubmitted(true);
   };
   let content;

   content = (
      <div className="contact__form__main">
         <h2 className="head-text">Drop up a line & Contact me</h2>
         <div className="contact__cards">
            <div className="contact__card">
               <FontAwesomeIcon
                  className="contact__card__icon"
                  icon={faMailForward}
               />
               <a href={`mailto:${userInfo?.email}`} className="p-text">
                  {userInfo?.phone}{" "}
               </a>
            </div>
            <div className="contact__card">
               <FontAwesomeIcon
                  className="contact__card__icon"
                  icon={faPhone}
               />
               <a href={`tel:${userInfo?.phone}`} className="p-text">
                  {userInfo?.email}
               </a>
            </div>
         </div>
         {!isFormSubmitted ? (
            <div className="contact__form contact__flex">
               <div className="contact__flex">
                  <input
                     className="p-text"
                     type="text"
                     name="name"
                     placeholder="Your name"
                     value={name}
                     onChange={handleChangeInput}
                  />
               </div>
               <div className="contact__flex">
                  <input
                     className="p-text"
                     type="text"
                     name="email"
                     placeholder="Your email"
                     value={email}
                     onChange={handleChangeInput}
                  />
               </div>
               <div className="contact__flex">
                  <textarea
                     className="p-text"
                     placeholder="Your message"
                     value={message}
                     name="message"
                     onChange={handleChangeInput}
                  />
               </div>
               <button type="button" className="p-text" onClick={handleSubmit}>
                  Send Message
               </button>
            </div>
         ) : (
            <h1>thank you</h1>
         )}
      </div>
   );

   return content;
};

export default Form;

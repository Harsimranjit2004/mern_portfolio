import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAllUserInfo } from "../../features/userInfoApiSlice";

const About = () => {
   const allUserInfo = useSelector(selectAllUserInfo);

   const listVariant = {
      hidden: {
         x: +100,
         opacity: 0,
      },
      visible: {
         x: 0,
         opacity: 1,
         //  staggerChildren: 0.2,
      },
   };
   return (
      <div className="about__main">
         <div className="about__heading__container">
            <FontAwesomeIcon
               icon={faUser}
               className="about__heading__icon"
               size="xl"
            />

            <h2 className="about__heading__content">
               About <span style={{ color: "#eb6b40" }}>Me</span>
            </h2>
         </div>
         <div className="about__information__container">
            <div className="about__image__container">
               <div className="about__image__card">
                  <img
                     src={require("../../assets/demo.png")}
                     alt="about_photo"
                  />
               </div>
            </div>
            <motion.div
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.5 }}
               initial={{ opacity: 0, x: +400 }}
               className="about__description__container"
            >
               <motion.h2 variants={listVariant}>
                  I'm {`${allUserInfo?.[0]?.name}`}
               </motion.h2>
               <motion.h3 variants={listVariant}>
                  {allUserInfo?.[0]?.aboutheading}
               </motion.h3>
               <motion.p variants={listVariant}>
                  {allUserInfo?.[0]?.homeabout}
               </motion.p>
               <motion.h3 variants={listVariant} className="  ">
                  <span style={{ color: "#eb6b40" }}>Email: </span>
                  {`${allUserInfo?.[0]?.email}`}
               </motion.h3>
               <motion.h3
                  variants={listVariant}
                  className="about__description__info"
               >
                  <span style={{ color: "#eb6b40" }}>Place : </span>{" "}
                  {allUserInfo?.[0].place}
               </motion.h3>
               <div className="about__description__button">
                  <motion.button variants={listVariant}>Resume</motion.button>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default About;

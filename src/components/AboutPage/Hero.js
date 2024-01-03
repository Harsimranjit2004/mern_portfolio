import React from "react";
import { useSelector } from "react-redux";
import { selectAllUserInfo } from "../../features/userInfoApiSlice";

const Hero = () => {
   const allUserInfo = useSelector(selectAllUserInfo);

   const content = (
      <div className="about__hero__main">
         <div className="about__hero__text__container">
            <div className="about__hero__heading">
               <h1>
                  I'm{" "}
                  <span style={{ color: "#eb6b40" }}>
                     {allUserInfo?.[0]?.name}
                  </span>
               </h1>
            </div>
            <div className="about__hero__paragraph__container">
               <p>{allUserInfo?.[0]?.about}</p>
            </div>
            <div className="about__hero__button__container">
               <button className="about__hero__button">Resume</button>
            </div>
         </div>
         {/* <div className="about__hero__image__container">
            <img src={require("../../assets/demo.png")} alt="imagel" />
         </div> */}
      </div>
   );

   return content;
};

export default Hero;

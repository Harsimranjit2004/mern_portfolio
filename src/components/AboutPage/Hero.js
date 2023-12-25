import React from "react";

const Hero = () => {
   const content = (
      <div className="about__hero__main">
         <div className="about__hero__text__container">
            <div className="about__hero__heading">
               <h1>
                  I'm{" "}
                  <span style={{ color: "#eb6b40" }}>Harsimranjit Singh</span>
               </h1>
            </div>
            <div className="about__hero__paragraph__container">
               <p>
                  lkasjoiwe jlkn asnd fioaw ejoiaj sdoifjaoeirjoiasj dfoi
                  jasdoif lkasjoiwejlknasnd fioawejoiaj sdoifjaoeirjoiasj dfoi
                  jasdoif lkasjoiwejlknasnd fioawejoiaj sdoifjaoeirjoiasj dfoi
                  jasdoif
               </p>
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

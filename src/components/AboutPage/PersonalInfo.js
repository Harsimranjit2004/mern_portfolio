import React from "react";
import CountUp from "react-countup";
const PersonalInfo = () => {
   const content = (
      <div className="about__personal__main">
         <div className="about__persoanl__heading__container">
            <h1 className="about__personal__heading">About me</h1>
         </div>
         <div className="about__personal__info__container">
            <div className="about__hero__image__container">
               <img src={require("../../assets/demo.png")} alt="imagel" />
            </div>
            <div class="about__personal__content__container">
               <h3>Data scientist &amp; Web Developer.</h3>

               <div class="about__personal__content__row">
                  <div class="about__personal__content__rows">
                     <ul>
                        <li>
                           <strong>Website:</strong> <span></span>
                        </li>
                        <li>
                           <strong>Phone:</strong> <span>+123 456 7890</span>
                        </li>
                        <li>
                           <strong>City:</strong> <span>Ontario,Canada</span>
                        </li>
                     </ul>
                  </div>
                  <div class="about__personal__content__rows">
                     <ul>
                        <li>
                           <strong>Age:</strong> <span>19</span>
                        </li>

                        <li>
                           <strong>Email:</strong> <span>+123 456 7890</span>
                        </li>
                        <li>
                           <strong>Freelance:</strong> <span>Available</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="about__personal__cards__container">
            <div className="about__personal__card">
               <div className="about__persoanl__card__number">
                  <div className="about__personal__card__sign">
                     <CountUp
                        className="counter"
                        start={0}
                        end={2}
                        duration={5}
                     />
                     {"+"}
                  </div>

                  <h3>Awards Won</h3>
               </div>
            </div>
            <div className="about__personal__card">
               <div className="about__persoanl__card__number">
                  <div className="about__personal__card__sign">
                     <CountUp
                        className="counter"
                        start={0}
                        end={2}
                        duration={5}
                     />
                     {"+"}
                  </div>
                  <h3>Projects Completed</h3>
               </div>
            </div>
            <div className="about__personal__card">
               <div className="about__persoanl__card__number">
                  <div className="about__personal__card__sign">
                     <CountUp
                        className="counter"
                        start={0}
                        end={2}
                        duration={5}
                     />
                     {"+"}
                  </div>
                  <h3>Experience</h3>
               </div>
            </div>
            {/* <div className="about__personal__card">expericen 2+</div>
            <div className="about__personal__card">projects 20</div> */}
         </div>
      </div>
   );
   return content;
};

export default PersonalInfo;

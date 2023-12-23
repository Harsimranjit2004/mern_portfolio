import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const Hero = () => {
   const navigate = useNavigate();

   const content = (
      <div className="hero__main">
         <div className="hero__information">
            <h1>👋 Hi There</h1>
            <h1>
               I'm{" "}
               <span className="hero__information__name">
                  Harsimranjit singh
               </span>
            </h1>
            <h3>
               I am into{" "}
               <TypeAnimation
                  sequence={[
                     "Web Development",
                     2000,
                     "Machine Learning",
                     2000,
                     "Artificial Intelligence",
                     2000,
                  ]}
                  speed={5}
                  repeat={Infinity}
                  cursor="|"
                  style={{ fontSize: "1.9rem", color: "#eb6b40" }}
               />
            </h3>
            <button onClick={() => navigate("/Contact")}>Hire me</button>
         </div>
         <div className="hero__image__container">
            <motion.img
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                     type: "spring",
                     damping: 5,
                     stiffness: 100,
                     restDelta: 0.001,
                  },
               }}
               //    className="hero__image"
               src={require("../assets/demo.png")}
               alt="heroImage"
            />
         </div>
      </div>
   );
   return content;
};

export default Hero;

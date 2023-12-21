import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const works = [
   {
      name: "harsimranjit singh",
      imageUrl: "http://fllannlfllan.com",
      projectLink: "http://finalatklj.com",
      codeLink: "https:lkjasdlfkjsS",
      title: "All",
      description: "hello i am ",
      tags: ["All", "helo"],
   },
];
const Projects = () => {
   const [activeFilter, setActiveFilter] = useState("All");
   const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 });
   const handleFilter = (item) => {
      setActiveFilter(item);
      setAnimateCart([{ y: 100, opacity: 0 }]);
      setTimeout(() => {
         setAnimateCart([{ y: -0, opacity: 1 }]);

         // if(item === "All"){

         // }
      }, 500);
   };
   const content = (
      <div className="projects__main">
         <h2 className="projects__heading">
            <span>My Creative Projects</span>
         </h2>
         <div className="project__filter">
            {["MERN", "Blockchain", "React js", "All"].map((item, index) => (
               <div
                  key={index}
                  onClick={() => handleFilter(item)}
                  className={`projects__filter__item ${
                     activeFilter === item ? "item-active" : ""
                  }`}
               >
                  {item}
               </div>
            ))}
         </div>
         {/* </div>
         <motion.div
            animate={animateCart}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="projects__portfolio"
         >
            {works.map((project, index) => (
               <div className="project__item project__flex" key={index}>
                  <div className="project__img project__flex">
                     <img
                        src={require("../assets/demo.png")}
                        alt={works.name}
                     />
                     <motion.div
                        whileHover={{ opacity: [0, 1] }}
                        transition={{
                           duration: 0.25,
                           ease: "easeInOut",
                           staggerChildren: 0.5,
                        }}
                        className="project__flex project__hover"
                     >
                        <a
                           href={works.projectLink}
                           target="_blank"
                           rel="norreferrer"
                        >
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.9] }}
                              transition={{ duration: 0.25 }}
                              className="project__flex"
                           >
                              <FontAwesomeIcon icon={faHome} />
                           </motion.div>
                        </a>
                        <a
                           href={works.projectLink}
                           target="_blank"
                           rel="norreferrer"
                        >
                           <motion.div
                              whileInView={{ scale: [0, 1] }}
                              whileHover={{ scale: [1, 0.9] }}
                              transition={{ duration: 0.25 }}
                              className="project__flex"
                           >
                              <FontAwesomeIcon icon={faHome} />
                           </motion.div>
                        </a>
                     </motion.div>
                  </div>
                  <div className="project__content project__flex">
                     <h4 className="bold-text">{works.title}</h4>
                     <p className="p-text" style={{ marginTop: 10 }}>
                        {" "}
                        {works.description}
                     </p>
                     <div className="project__tag project__flex">
                        <p className="p-text">{"all"}</p>
                     </div>
                  </div>
               </div>
            ))}
         </motion.div> */}
      </div>
   );
   return content;
};

export default Projects;

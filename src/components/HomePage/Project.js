import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { projectApiSlice } from "../../features/projectApiSlice";

const Project = ({ id }) => {
   console.log(id);
   const { project } = projectApiSlice.useGetProjectQuery(undefined, {
      selectFromResult: ({ data }) => ({
         project: data?.entities[id],
      }),
   });

   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const handleUpdateButton = () => {};
   return (
      <div className="work__item project__flex">
         <div className="work__img project__flex">
            <img src={require("../../assets/demo.png")} alt={project?.title} />
            <motion.div
               whileHover={{ opacity: [0, 1] }}
               transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
               }}
               className="work__hover project__flex"
            >
               <a href={project?.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                     whileInView={{ scale: [0, 1] }}
                     whileHover={{ scale: [1, 0.9] }}
                     transition={{ duration: 0.25 }}
                     className="project__flex"
                  >
                     <FontAwesomeIcon
                        className="project__icon"
                        icon={faGithub}
                     />
                  </motion.div>
               </a>
               <a href={project?.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                     whileInView={{ scale: [0, 1] }}
                     whileHover={{ scale: [1, 0.9] }}
                     transition={{ duration: 0.25 }}
                     className="project__flex"
                  >
                     <FontAwesomeIcon className="project__icon" icon={faEye} />
                  </motion.div>
               </a>
            </motion.div>
         </div>
         <div className="project__flex project__content">
            <h4 className="bold-text">{project?.title}</h4>
            <p className="p-text" style={{ marginTop: 10 }}>
               {" "}
               {project?.description}
            </p>
            <div className="project__tag project__flex">
               <p className="p-text" style={{ textAlign: "left" }}>
                  {project?.tags?.[0]}
               </p>
            </div>
            {isAuthenticated && (
               <div className="project__admin__button">
                  <button onClick={handleUpdateButton}>update</button>
               </div>
            )}
         </div>
      </div>
   );
};

export default Project;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { useGetProjectQuery } from "../../features/projectApiSlice";

const Projects = () => {
   const [activeFilter, setActiveFilter] = useState("All");
   const [animateCart, setAnimateCart] = useState({ y: 0, opacity: 1 });
   const handleFilter = (item) => {
      setActiveFilter(item);
      setAnimateCart([{ y: 100, opacity: 0 }]);
      setTimeout(() => {
         setAnimateCart([{ y: -0, opacity: 1 }]);
      }, 500);
   };
   const { data } = useGetProjectQuery(undefined, {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
   });
   const content = (
      <div className="projects__main">
         <h2 className="p                 rojects__heading">
            <span>My Creative Projects</span>
         </h2>
         <div className="project__filter">
            {["MERN", "Blockchain", "Data Science", "All"].map(
               (item, index) => (
                  <div
                     key={item}
                     onClick={() => handleFilter(item)}
                     className={`projects__filter__item ${
                        activeFilter === item ? "item-active" : ""
                     }`}
                  >
                     {item}
                  </div>
               )
            )}
         </div>
         <motion.div
            animate={animateCart}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="work__portfolio"
         >
            {data?.ids?.map(
               (item, index) =>
                  data?.entities[item].tags.includes(activeFilter) && (
                     <Project id={item} key={index} filter={activeFilter} />
                  )
            )}
         </motion.div>
      </div>
   );
   return content;
};

export default Projects;

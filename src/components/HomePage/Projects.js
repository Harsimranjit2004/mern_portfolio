import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { useGetProjectQuery } from "../../features/projectApiSlice";

const Projects = () => {
   // const []
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
   // const filterProjectsByTags = (projects, tagsToInclude) => {
   //    return projects.filter((project) =>
   //          tagsToInclude.some((tag) =>
   //             project.tags
   //                .map((t) => t.toLowerCase())
   //                .includes(tag.toLowerCase())
   //          )
   //       )
   //       .map((project) => project.id);
   // };
   const { data } = useGetProjectQuery(undefined, {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
      selectFromResult: ({ data }) => ({
         project: data?.entities,
      }),
   });
   // const filteredProjectIds = filterProjectsByTags(data, ["all"]);

   // console.log(filteredProjectIds);
   // useEffect(() => {
   //    set;
   // });
   const content = (
      <div className="projects__main">
         <h2 className="p                 rojects__heading">
            <span>My Creative Projects</span>
         </h2>
         <div className="project__filter">
            {["MERN", "Blockchain", "React js", "All"].map((item, index) => (
               <div
                  key={item}
                  onClick={() => handleFilter(item)}
                  className={`projects__filter__item ${
                     activeFilter === item ? "item-active" : ""
                  }`}
               >
                  {item}
               </div>
            ))}
         </div>
         <motion.div
            animate={animateCart}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="work__portfolio"
         >
            {data?.ids?.map((item, index) => (
               <Project id={item} key={index} />
            ))}
         </motion.div>
      </div>
   );
   return content;
};

export default Projects;

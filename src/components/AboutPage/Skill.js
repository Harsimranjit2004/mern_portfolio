import React from "react";
import { CircularProgress } from "@mui/joy";
import {
   useDeleteSkillsMutation,
   useGetSkillsQuery,
} from "../../features/skillsApiSlice";
import { useSelector } from "react-redux";
const Skill = ({ id }) => {
   const { skill } = useGetSkillsQuery(undefined, {
      selectFromResult: ({ data }) => ({
         skill: data?.entities[id],
      }),
   });
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

   const [deleteSkills] = useDeleteSkillsMutation();

   const handleDelete = () => {
      deleteSkills({ id });
   };
   return (
      <>
         <CircularProgress
            //    color="white"
            determinate
            value={skill.value}
            sx={{
               "--CircularProgress-size": "150px",
               "--CircularProgress-progressColor": "#eb6b40",
            }}
         >
            {skill.text}
         </CircularProgress>
         {isAuthenticated && (
            <div className="project__admin__button">
               <button onClick={handleDelete}>Delete</button>
            </div>
         )}
      </>
   );
};

export default Skill;

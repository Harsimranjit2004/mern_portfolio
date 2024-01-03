import React from "react";
import {
   useDeleteInterestMutation,
   useGetInterestQuery,
} from "../../features/interestApiSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const InterestComponent = ({ id }) => {
   const navigate = useNavigate();
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   const { interest } = useGetInterestQuery(undefined, {
      selectFromResult: ({ data }) => ({
         interest: data?.entities[id],
      }),
   });
   const [deleteInterest] = useDeleteInterestMutation();
   const handleDelete = () => {
      deleteInterest({ id });
   };
   const handleUpdateButton = () => {
      navigate(`/interest/${id}`);
   };

   return (
      <div className="interest__card" key={interest.title}>
         <div className="interest__icon">
            <img src={interest.icon} alt={interest.title} />
         </div>
         <div className="interest__item__heading">
            <h3>{interest.title}</h3>
         </div>
         <div className="interest__description">
            <p>{interest.description}</p>
         </div>
         {isAuthenticated && (
            <div className="project__admin__button">
               <button onClick={handleUpdateButton}>update</button>
               <button onClick={handleDelete}>Delete</button>
            </div>
         )}
      </div>
   );
};

export default InterestComponent;

import React from "react";
import { useGetInterestQuery } from "../../features/interestApiSlice";

const InterestComponent = ({ id }) => {
   const { interest } = useGetInterestQuery(undefined, {
      selectFromResult: ({ data }) => ({
         interest: data?.entities[id],
      }),
   });
   console.log(id);
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
      </div>
   );
};

export default InterestComponent;

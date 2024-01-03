import React from "react";
import InterestComponent from "./InterestComponent";
import { useGetInterestQuery } from "../../features/interestApiSlice";

const Interest = () => {
   const { data } = useGetInterestQuery();
   let content = (
      <div className="interest__main">
         <div className="interest__heading">
            <h2 className="interest__heading__text">Areas of Interest</h2>
         </div>
         <div className="interest__paragraph">
            <p className="interest__paragraph__text">
               Take a look at some of the things I love working on{" "}
            </p>
         </div>
         <div className="interest__content">
            {data?.ids?.map((item, index) => (
               <InterestComponent id={item} key={index} />
            ))}
         </div>
      </div>
   );
   return content;
};

export default Interest;

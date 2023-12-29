import React from "react";
import { Skeleton } from "@mui/joy";
const HeroSkeleton = () => {
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100vw",
            padding: "20px", // Adjust the padding as needed
            boxSizing: "border-box",
         }}
         className="hero__main"
      >
         <div
            style={{
               //    flex: 1,
               marginLeft: "20px", // Adjust the margin between information and image
            }}
            className="hero__information"
         >
            <Skeleton animation="wave" variant="text" width={250} height={50} />
            <Skeleton animation="wave" variant="text" width={300} height={50} />
            <Skeleton animation="wave" variant="text" width={350} height={40} />
            <div
               style={{
                  marginTop: "50px", // Adjust the margin above the button
               }}
               className="hero__hire__button"
            >
               <Skeleton
                  animation="wave"
                  variant="rect"
                  width={100}
                  height={40}
               />
            </div>
         </div>
         <div style={{}} className="hero__image__container">
            <Skeleton
               animation="wave"
               variant="rect"
               width={200}
               height={200}
            />
            {/* </motion.div> */}
         </div>
      </div>
   );
};

export default HeroSkeleton;

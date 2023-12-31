import React from "react";
import InterestComponent from "./InterestComponent";
import { useGetInterestQuery } from "../../features/interestApiSlice";
const interestsData = [
   {
      icon: "https://placekitten.com/64/64",
      title: "MERN Stack",
      description:
         "Full stack development using MongoDB, Express.js, React, and Node.js.",
   },
   {
      icon: "https://placebear.com/64/64",
      title: "GraphQL",
      description:
         "Query language for APIs, often used with modern web applications.",
   },
   {
      icon: "https://placekitten.com/64/64",
      title: "React Native",
      description:
         "Build mobile applications using React for iOS and Android platforms.",
   },
   {
      icon: "https://placebeard.it/64/64", // Placeholder image of a beard (64x64 pixels)
      title: "Express.js",
      description:
         "Web application framework for Node.js, designed for building web and mobile apps.",
   },
   {
      icon: "https://placecage.it/64/64", // Placeholder image of Nicolas Cage (64x64 pixels)
      title: "Node.js",
      description:
         "JavaScript runtime for server-side development, built on Chrome's V8 JavaScript engine.",
   },
];
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

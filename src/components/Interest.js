import React from "react";
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
            {interestsData.map((item, key) => (
               <div className="interest__card">
                  <div className="interest__icon">
                     <img src={item.icon} alt={item.title} />
                  </div>
                  <div className="interest__item__heading">
                     <h3>{item.title}</h3>
                  </div>
                  <div className="interest__description">
                     <p>{item.description}</p>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
   return content;
};

export default Interest;

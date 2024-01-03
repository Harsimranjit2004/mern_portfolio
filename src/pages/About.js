import React from "react";
import Hero from "../components/AboutPage/Hero";
import PersonalInfo from "../components/AboutPage/PersonalInfo";
import Skills from "../components/AboutPage/Skills";
import Loading from "../config/Loading";
import Education from "../components/AboutPage/Education";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
const About = () => {
   const { currentData, isFetching, isSuccess, isError, error } =
      useGetUserInfoQuery(undefined, {
         pollingInterval: 60000,
         refetchOnFocus: true,
         refetchOnMountOrArgChange: true,
      });
   // console.log(currentData);
   let content;
   if (isFetching && !currentData) content = <Loading />;
   if (isError) {
      content = <p>{error?.currentData?.message}</p>;
   }
   if (isSuccess) {
      content = (
         <div className="about__page__main">
            <div className="parallel_image">
               <img
                  src={"https://i.ytimg.com/vi/9sNQFJAb3Ss/maxresdefault.jpg"}
                  alt="parallelimgae"
               />
            </div>
            <Hero />
            <PersonalInfo />
            <Skills />
            <Education />
         </div>
      );
   }
   return content;
};

export default About;

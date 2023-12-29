import React from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// import { useGetUserInfo } from "../../features/userInfoApiSlice";
import {
   selectUserInfoById,
   useGetUserInfoQuery,
} from "../../features/userInfoApiSlice";
import { useSelector } from "react-redux";

const Hero = ({ id }) => {
   // const userInfo = useSelector((state) => selectUserInfoById(state, id));
   const { user } = useGetUserInfoQuery("userInfoList", {
      selectFromResult: ({ data }) => ({
         user: data?.entities[id],
      }),
   });

   const navigate = useNavigate();
   // console.log(userInfo);
   let content;
   // if (isLoading) content = <p className="error">Loading...</p>;
   // if (isError) {
   //    content = <p className="error">{error?.data?.message}</p>;
   // }
   // console.log(isSuccess);
   // console.log(isError);
   // if (isSuccess) {
   content = (
      <div className="hero__main">
         <div className="hero__information">
            <h1>Hi There 👋</h1>
            <h1>
               I'm <span className="hero__information__name">{user.name}</span>
            </h1>
            <h3>
               I am into{" "}
               <TypeAnimation
                  sequence={[
                     "Web Development",
                     2000,
                     "Machine Learning",
                     2000,
                     "Artificial Intelligence",
                     2000,
                  ]}
                  speed={5}
                  repeat={Infinity}
                  cursor="|"
                  style={{ color: "#eb6b40" }}
               />
            </h3>
            <div className="hero__hire__button">
               <button onClick={() => navigate("/Contact")}>Hire me</button>
            </div>
         </div>
         <div className="hero__image__container">
            <motion.img
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                     type: "tween",
                     damping: 5,
                     stiffness: 100,
                     restDelta: 0.001,
                  },
               }}
               src={require("../../assets/demo.png")}
               alt="heroImage"
            />
         </div>
      </div>
   );
   // }
   return content;
};

export default Hero;

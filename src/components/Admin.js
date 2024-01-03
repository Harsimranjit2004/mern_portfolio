import React from "react";
import ProfileForm from "./AdminPage/ProfileInfo";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";

import Project from "./AdminPage/Project";
import Interest from "./AdminPage/Interest";
import Skills from "./AdminPage/Skills";
import Education from "./AdminPage/Education";

const Admin = () => {
   const { data: userInfo } = useGetUserInfoQuery("userInfoList", {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
   });

   return (
      <div className="admin__main">
         <div className="admin__flex">
            <div className="admin__change__userInfo">
               Update UserInfo
               <ProfileForm id={userInfo?.ids[0]} />
            </div>
            <div className="admin__add__project">
               Create New Project
               <Project />
            </div>
            <div className="admin__add__project">
               Create new Interest
               <Interest />
            </div>
            <div className="admin__add__project">
               Create new Skill
               <Skills />
            </div>
            <div className="admin__add__project">
               Create new Education
               <Education />
            </div>
         </div>
      </div>
   );
};

export default Admin;

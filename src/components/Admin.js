import React from "react";
import { Form } from "react-router-dom";
import ProfileForm from "./AdminPage/ProfileInfo";
import {
   selectAllUserInfo,
   useGetUserInfoQuery,
   userInfoApiSlice,
} from "../features/userInfoApiSlice";
import { useSelector } from "react-redux";
import Project from "./AdminPage/Project";
import Interest from "./AdminPage/Interest";

const Admin = () => {
   const { data: userInfo } = useGetUserInfoQuery("userInfoList", {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
   });
   // console.log(userInfo);
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
         </div>
      </div>
   );
};

export default Admin;

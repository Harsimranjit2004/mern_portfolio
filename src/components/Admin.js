import React from "react";
import { Form } from "react-router-dom";
import ProfileForm from "./AdminPage/ProfileInfo";
import {
   selectAllUserInfo,
   useGetUserInfoQuery,
   userInfoApiSlice,
} from "../features/userInfoApiSlice";
import { useSelector } from "react-redux";

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
               <ProfileForm id={userInfo?.ids[0]} />
            </div>
         </div>
      </div>
   );
};

export default Admin;

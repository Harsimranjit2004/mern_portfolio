import React from "react";
import Form from "../components/ContactPage/Form";
import { useGetUserInfoQuery } from "../features/userInfoApiSlice";
const Contact = () => {
   const {
      data: userInfo,
      isLoading,
      isSuccess,
   } = useGetUserInfoQuery(undefined, {
      pollingInterval: 60000,
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
   });
   let content;

   if (isLoading) content = <p style={{ height: "30px" }}>lkajsdfljl</p>;
   if (isSuccess) {
      content = (
         <div className="contact__page__main">
            <Form id={userInfo?.ids[0]} />
         </div>
      );
   }
   return content;
};

export default Contact;

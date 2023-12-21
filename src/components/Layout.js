import React from "react";
import { Outlet } from "react-router-dom";
import DisplayHeader from "./DisplayHeader";
const Layout = () => {
   return (
      <>
         <DisplayHeader />
         <div className="outlet__container">
            <Outlet />
         </div>
      </>
   );
};

export default Layout;

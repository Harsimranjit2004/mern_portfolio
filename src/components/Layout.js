import React from "react";
import { Outlet } from "react-router-dom";
import DisplayHeader from "./DisplayHeader";
import Footer from "./Footer";
const Layout = () => {
   return (
      <>
         <DisplayHeader />
         <div className="outlet__container">
            <Outlet />
         </div>
         <Footer />
      </>
   );
};

export default Layout;

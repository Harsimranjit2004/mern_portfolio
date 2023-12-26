import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DisplayHeader from "./DisplayHeader";
import Footer from "./Footer";
const Layout = () => {
   const location = useLocation();
   const isLoginRoute = location.pathname === "/login";
   return (
      <>
         <DisplayHeader />
         <div className="outlet__container">
            <Outlet />
         </div>
         {!isLoginRoute && <Footer />}
      </>
   );
};

export default Layout;

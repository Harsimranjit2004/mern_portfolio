import { store } from "../app/store";
import { userInfoApiSlice } from "../features/userInfoApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import React from "react";

const Prefetch = () => {
   useEffect(() => {
      store.dispatch(
         userInfoApiSlice.util.prefetch("getUserInfo", "userInfoList", {
            force: true,
         })
      );
   }, []);
   return <Outlet />;
};

export default Prefetch;

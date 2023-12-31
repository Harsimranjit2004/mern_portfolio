import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
   name: "auth",
   initialState: { token: null, isAuthenticated: false },
   reducers: {
      setCredentials: (state, action) => {
         const { accessToken } = action.payload;
         state.isAuthenticated = true;
         state.token = accessToken;
      },
      logOut: (state, action) => {
         state.token = null;
         state.isAuthenticated = false;
      },
   },
});
export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrenToken = (state) => state.auth.token;

import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
// import { apiSlice } from "../app/api/apiSlice";
import { apiSlice } from "../app/api/apiSlice";

const userInfoAdapter = createEntityAdapter({});

const initialState = userInfoAdapter.getInitialState();

export const userInfoApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getUserInfo: builder.query({
         query: () => "/user-info",
         validateStatus: (response, result) => {
            return response.status === 200 && !result.isError;
         },
         transformResponse: (responseData) => {
            const loadedUserInfo = responseData.map((userInfo) => {
               userInfo.id = userInfo._id;
               return userInfo;
            });
            return userInfoAdapter.setAll(initialState, loadedUserInfo);
         },
         providesTags: (result, error, arg) => {
            if (result?.ids) {
               return [
                  { type: "UserInfo", id: "LIST" },
                  ...result.ids.map((id) => ({ type: "UserInfo", id })),
               ];
            } else return [{ type: "UserInfo", id: "LIST" }];
         },
      }),
      updateUserInfo: builder.mutation({
         query: (initialUserInfo) => ({
            url: "/user-info",
            method: "PATCH",
            body: {
               ...initialUserInfo,
            },
         }),
         invalidatesTags: (result, error, arg) => [
            { type: "UserInfo", id: arg.id },
         ],
      }),
   }),
});

export const { useGetUserInfoQuery, useUpdateUserInfoMutation } =
   userInfoApiSlice;

export const selectUserInfoResult =
   userInfoApiSlice.endpoints.getUserInfo.select();

//create memoized selecotr

const selectUsersData = createSelector(
   selectUserInfoResult,
   (userResult) => userResult.data
);
export const {
   selectAll: selectAllUserInfo,
   selectById: selectUserInfoById,
   selectIds: selectUserIds,
} = userInfoAdapter.getSelectors(
   (state) => selectUsersData(state) ?? initialState
);

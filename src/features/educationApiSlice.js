import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const educationAdapter = createEntityAdapter({});
const initialState = educationAdapter.getInitialState({});

export const EducationApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getEducation: builder.query({
         query: () => "/education",
         validateStatus: (response, result) => {
            return response.status === 200 && !result.isError;
         },
         transformResponse: (responseData) => {
            const loadedEducation = responseData.map((education) => {
               education.id = education._id;
               return education;
            });
            return educationAdapter.setAll(initialState, loadedEducation);
         },
         providesTags: (result, error, arg) => {
            if (result?.ids) {
               return [
                  { type: "Education", id: "LIST" },
                  ...result.ids.map((id) => ({ type: "Education", id })),
               ];
            } else return [{ type: "Education", id: "LIST" }];
         },
      }),
      addNewEducation: builder.mutation({
         query: (initialEducationData) => ({
            url: "/education",
            method: "POST",
            body: {
               ...initialEducationData,
            },
         }),
         invalidatesTags: [{ type: "Eduaction", id: "LIST" }],
      }),
      updateEducation: builder.mutation({
         query: (initialEducationData) => ({
            url: "/education",
            method: "PATCH",
            body: {
               ...initialEducationData,
            },
         }),
         invalidatesTags: (result, error, arg) => [
            { type: "Education", id: arg.id },
         ],
      }),
      deleteEducation: builder.mutation({
         query: ({ id }) => ({
            url: "/education",
            method: "DELETE",
            body: { id },
         }),
         invalidatesTags: (result, error, arg) => [
            { type: "Education", id: arg.id },
         ],
      }),
   }),
});

export const {
   useGetEducationQuery,
   useAddNewEducationMutation,
   useUpdateEducationMutation,
   useDeleteEducationMutation,
} = EducationApiSlice;
export const selectEducationResult =
   EducationApiSlice.endpoints.getEducation.select();
const selectEduactionData = createSelector(
   selectEducationResult,
   (selectEducationResult) => selectEducationResult.data
);
export const {
   selectAll: selectAllEducation,
   selectById: selectEducationById,
   selectIds: selectEducationIds,
} = educationAdapter.getSelectors(
   (state) => selectEduactionData(state) ?? initialState
);

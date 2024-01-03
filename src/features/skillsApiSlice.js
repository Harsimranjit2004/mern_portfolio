import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../app/api/apiSlice";

const skillsAdapter = createEntityAdapter({});
const initialState = skillsAdapter.getInitialState({});

export const SkillsApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      getSkills: builder.query({
         query: () => "/skills",
         validateStatus: (response, result) => {
            return response.status === 200 && !result.isError;
         },
         transformResponse: (responseData) => {
            const loadedSkills = responseData.map((skills) => {
               skills.id = skills._id;
               return skills;
            });
            return skillsAdapter.setAll(initialState, loadedSkills);
         },
         providesTags: (result, error, arg) => {
            if (result?.ids) {
               return [
                  { type: "Skills", id: "LIST" },
                  ...result.ids.map((id) => ({ type: "Skills", id })),
               ];
            } else return [{ type: "Skills", id: "LIST" }];
         },
      }),
      addNewSkills: builder.mutation({
         query: (initialSkillsData) => ({
            url: "/skills",
            method: "POST",
            body: {
               ...initialSkillsData,
            },
         }),
         invalidatesTags: [{ type: "Skills", id: "LIST" }],
      }),
      updateSkills: builder.mutation({
         query: (initialSkillsData) => ({
            url: "/skills",
            method: "PATCH",
            body: {
               ...initialSkillsData,
            },
         }),
         invalidatesTags: (result, error, arg) => [
            { type: "Skills", id: arg.id },
         ],
      }),
      deleteSkills: builder.mutation({
         query: ({ id }) => ({
            url: "/skills",
            method: "DELETE",
            body: { id },
         }),
         invalidatesTags: (result, error, arg) => [
            { type: "Skills", id: arg.id },
         ],
      }),
   }),
});
export const {
   useGetSkillsQuery,
   useAddNewSkillsMutation,
   useUpdateSkillsMutation,
   useDeleteSkillsMutation,
} = SkillsApiSlice;

export const selectSkillsResult = SkillsApiSlice.endpoints.getSkills.select();

const selectSkillsData = createSelector(
   selectSkillsResult,
   (selectSkillsResult) => selectSkillsResult.data
);

export const {
   selectAll: selectAllSkillss,
   selectById: selectSkillsById,
   selectIds: selectSkillsIds,
} = skillsAdapter.getSelectors(
   (state) => selectSkillsData(state) ?? initialState
);

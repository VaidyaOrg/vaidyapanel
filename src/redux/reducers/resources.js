import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    loading: true,
  };
export const resourceReducer = createReducer(initialState,{
    LoadResourcesRequest:(state) => {
        state.loading = true
    },
    LoadResourcesSuccess:(state,action)=>{
        state.loading = false;
        state.resources = action.payload;
    },
    LoadResourcesFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    }
})
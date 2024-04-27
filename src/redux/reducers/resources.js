import { createReducer } from "@reduxjs/toolkit";
const initialState = {
    isLoading: true,
  };
export const resourceReducer = createReducer(initialState,{
    LoadResourcesRequest:(state) => {
        state.isLoading = true
    },
    LoadResourcesSuccess:(state,action)=>{
        state.isLoading = false;
        state.resources = action.payload;
    },
    LoadResourcesFail:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    }
})
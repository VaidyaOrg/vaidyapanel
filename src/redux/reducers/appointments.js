import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isLoading: true,
};

export const appointmentReducer = createReducer(initialState, {
    LoadAppointmentRequest: (state) => {
        state.isLoading = true;
    },
    LoadAppointmentSuccess: (state, action) => {
        state.isLoading = false;
        state.appointments = action.payload;
    },
    LoadAppointmentFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    }
})

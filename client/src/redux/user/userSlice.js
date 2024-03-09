import { createSlice } from "@reduxjs/toolkit";

//initial global states for user
const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        // access the payload data when user signs in
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = true;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});


export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

export const fakeSlice = createSlice({
    name: "fake",
    initialState: {
        user: {
            name: "",
            email: ""
        },
        pending: false,
        error: false
    },
    reducers: {
        request: (state) => {
            state.pending = true;
        },
        onSuccess: (state, action) => {
            state.pending = false;
            state.user = action.payload;
        },
        onError: (state) => {
            state.error = true;
            state.pending = false;
        }
    }
});

export const {request, onSuccess, onError} = fakeSlice.actions;
export default fakeSlice.reducer;
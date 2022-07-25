import {createSlice} from '@reduxjs/toolkit';

export const testSlice = createSlice({
    name: "test",
    initialState: {
        name: ""
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
        },
        reset: (state) => (state = {})
    }
});

export const {update, reset} = testSlice.actions;
export default testSlice.reducer;
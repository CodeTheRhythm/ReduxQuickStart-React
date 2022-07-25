import {createSlice} from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: "customer",
    initialState: {
        name: "",
        email: ""
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
});

export const {update} = customerSlice.actions;
export default customerSlice.reducer;
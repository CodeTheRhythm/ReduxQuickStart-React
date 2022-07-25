import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const getList = createAsyncThunk(
    "todo/getList",
    async ({something}, {dispatch, getState, rejectWithValue}) => {
        const {test, fake} = getState();

        try {
            console.log(something);
            console.log(test.name, fake.user.name);

            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
	        const data = await response.json();
            console.log(data);

            return data;
        }
        catch (err) {
            console.log("error-1", err.message);
            return rejectWithValue(err.message);
        }
        finally {
            dispatch(update({somethingNew: "something new"}));
        }
    }
);

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [],
        status: null,
        error: null
    },
    reducers: {
        update: (state, action) => 
			console.log(action.payload.somethingNew),
    },
    extraReducers: {
        [getList.pending]: (state) => {
            state.status = "loading";
        },
        [getList.fulfilled]: (state, {payload}) => {
            state.list = payload;
            state.status = "success";
        },
        [getList.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.payload;
            console.log("error-2", state.error);
        }
    }
});

export const {update} = todoSlice.actions;
export default todoSlice.reducer;
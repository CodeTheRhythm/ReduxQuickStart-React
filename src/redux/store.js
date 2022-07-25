import {configureStore} from '@reduxjs/toolkit';
import testSlice from './slices/testSlice';
import fakeSlice from './slices/fakeSlice';
import todoSlice from './slices/todoSlice';
import customer from './slices/customerSlice';

export default configureStore({
    reducer: {
        test: testSlice,
        customer: customer,
        fake: fakeSlice,
        todo: todoSlice
    }
});
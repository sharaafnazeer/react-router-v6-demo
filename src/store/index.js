import {configureStore} from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
import contactSlice from "./contactSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        contact: contactSlice,
    },
})
// combination of multiple reducers
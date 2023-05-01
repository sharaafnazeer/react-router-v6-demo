import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        }, // there is no external parameter got passed
        decrement: (state) => {
            state.value -= 1
        }, // there is no external parameter got passed
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },  // there is an external parameter got passed
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
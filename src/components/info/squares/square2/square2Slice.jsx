import { createSlice } from "@reduxjs/toolkit";

const square2Slice = createSlice({
    name: 'calculations',
    initialState: {
        a: +0,
        b: +0,
        result: +0
    },
    reducers: {
        setA: (state, action) => {
            state.a = action.payload
        },
        setB: (state, action) => {
            state.b = action.payload
        },
        calculateResult: (state) => {
            state.result = +state.a + +state.b
        },
        reset: (state) => {
            state.a = 0
            state.b = 0
            state.result = 0
        }
    }
})

export const {setA, setB, calculateResult, reset} = square2Slice.actions

export default square2Slice.reducer;
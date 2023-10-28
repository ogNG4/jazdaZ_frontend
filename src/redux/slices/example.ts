import { createSlice } from "@reduxjs/toolkit";
import { IExampleState } from "redux/types/example";


export const exampleSlice = createSlice({
    name: 'example',
    initialState: {
        count: 0,
    } as IExampleState,

    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
    }
})


export const { increment, decrement, reset } = exampleSlice.actions;
export default exampleSlice.reducer;
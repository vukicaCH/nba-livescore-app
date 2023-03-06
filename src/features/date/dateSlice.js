import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "../../helper";

const initialState = {
    date: formatDate()
}

export const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
        changeDate(state, action) {
            state.date = action.payload
        }
    }
})

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer
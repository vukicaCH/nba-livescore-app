import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    playerInfo: {},
    loading: false,
    error: null
}

const PLAYER_INFO_URL = 'https://www.balldontlie.io/api/v1/players/'

export const fetchPlayerInfo = createAsyncThunk('playerInfo/fetchPlayerInfo', async (id) => {
    const response = await axios.get(`${PLAYER_INFO_URL}${id}`)
    return response.data
})

const playerInfoSlice = createSlice({
    name: 'playerInfo',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPlayerInfo.pending, (state, action) => {
                state.playerInfo = {};
                state.loading = true;
            })
            .addCase(fetchPlayerInfo.fulfilled, (state, action) => {
                state.playerInfo = action.payload
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPlayerInfo.rejected, (state, action) => {
                state.playerInfo = {};
                state.loading = false;
                state.error = action.error
            })
    }
})

export default playerInfoSlice.reducer
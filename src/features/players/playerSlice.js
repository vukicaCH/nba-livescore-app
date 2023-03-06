import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    playerInfo: {},
    player: [],
    loading: false,
    loadingInfo: false,
    error: null
}

const PLAYER_INFO_URL = 'https://www.balldontlie.io/api/v1/players/'
const PLAYER_STATS_URL = `https://www.balldontlie.io/api/v1/stats`;

export const fetchPlayerInfo = createAsyncThunk('player/fetchPlayerInfo', async (id) => {
    const response = await axios.get(`${PLAYER_INFO_URL}${id}`)
    return response.data
})

export const fetchPlayer = createAsyncThunk('player/fetchPlayer', async (parameters) => {
    const {id, season} = parameters
    const FINAL_URL = `${PLAYER_STATS_URL}?seasons[]=${season}&player_ids[]=${id}&per_page=100`;
    console.log(FINAL_URL);
    const response = await axios.get(FINAL_URL)
    return response.data.data
})

const playerSlice = createSlice({
    name: 'player',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchPlayer.pending, (state, action) => {
                state.player = [];
                state.loading = true;
            })
            .addCase(fetchPlayer.fulfilled, (state, action) => {
                state.player = action.payload
                    .sort((game1, game2) => game1.game.date > game2.game.date ? -1 : 1)
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPlayer.rejected, (state, action) => {
                state.player = [];
                state.loading = false;
                state.error = action.error
            })
            .addCase(fetchPlayerInfo.pending, (state, action) => {
                state.playerInfo = {};
                state.loadingInfo = true;
            })
            .addCase(fetchPlayerInfo.fulfilled, (state, action) => {
                state.playerInfo = action.payload
                state.loadingInfo = false;
                state.error = null;
            })
            .addCase(fetchPlayerInfo.rejected, (state, action) => {
                state.playerInfo = {};
                state.loadingInfo = false;
                state.error = action.error
            })
    }
})

export default playerSlice.reducer
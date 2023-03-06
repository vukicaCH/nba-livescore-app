import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    game: [],
    error: null,
    loading: false
}

const GAME_STATS_URL = `https://www.balldontlie.io/api/v1/stats/`;

export const fetchGameStats = createAsyncThunk('gameStats/fetchGameStats', async (id) => {
    const response = await axios.get(`${GAME_STATS_URL}?game_ids[]=${id}&per_page=50`);
    return response.data.data
})

export const gameStatsSlice = createSlice({
    name: 'gameStats',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchGameStats.pending, (state, action) => {
                state.game = [];
                state.loading = true;
            })
            .addCase(fetchGameStats.fulfilled, (state, action) => {
                state.game = action.payload
                    .sort((player_1, player_2) => {
                        return player_1.pts > player_2.pts ? -1 : 1
                    })
                state.loading = false;
                state.error = action.error
            })
            .addCase(fetchGameStats.rejected, (state, action) => {
                state.game = [];
                state.error = action.error
                state.loading = false;
            })
    }
})

export default gameStatsSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getCurrentSeason } from "../../helper";

const initialState = {
    games: [],
    error: null,
    loading: false
}

const season = getCurrentSeason()

const GAMES_URL = `https://www.balldontlie.io/api/v1/games/`;

export const fetchHomeGames = createAsyncThunk('h2h/fetchHomeGames', async (team_id) => {
    const FINAL_URL = `${GAMES_URL}?team_ids[]=${team_id}&seasons[]=${season}&per_page=100`
    const response = await axios.get(FINAL_URL);
    return response.data.data
})

const homeGamesSlice = createSlice({
    name: 'homeGames',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(fetchHomeGames.pending, (state, action) => {
            state.games = [];
            state.loading = true;
        })
        .addCase(fetchHomeGames.fulfilled, (state, action) => {
            state.games = action.payload
                .filter(game => game.period === 4)
                .sort((game1, game2) => {
                    return game1.id > game2.id ? -1 : 1
                })
            state.loading = false;
        })
        .addCase(fetchHomeGames.rejected, (state, action) => {
            state.games = [];
            state.error = action.error.message
            state.loading = false;
        })
    }
})

export default homeGamesSlice.reducer
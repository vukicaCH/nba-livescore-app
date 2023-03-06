import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    games: [],
    loading: false,
    error: null
}

const GAMES_URL = `https://www.balldontlie.io/api/v1/games`

export const fetchGames = createAsyncThunk('games/fetchGames', async (date) => {
    const response = await axios.get(`${GAMES_URL}?dates[]=${date}`);
    return response.data.data
})

export const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(fetchGames.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchGames.fulfilled, (state, action) => {
            state.games = action.payload
            state.loading = false
            state.error = null;
        })
        .addCase(fetchGames.rejected, (state, action) => {
            state.games = [];
            state.loading = false;
            state.error = action.error;
        })
    }
}) 

export default gamesSlice.reducer
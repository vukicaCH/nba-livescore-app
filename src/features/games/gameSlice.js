import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    game: {},
    error: null,
    loading: false
}

const GAME_URL = 'https://www.balldontlie.io/api/v1/games/';

export const fetchGame = createAsyncThunk('game/fetchGame', async (id) => {
    const response = await axios.get(`${GAME_URL}${id}`);
    return response.data
})

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
        .addCase(fetchGame.pending, (state, action) => {
            state.game = {};
            state.loading = true;
        })
        .addCase(fetchGame.fulfilled, (state, action) => {
            state.game = action.payload
            state.loading = false;
        })
        .addCase(fetchGame.rejected, (state, action) => {
            state.game = {};
            state.error = action.error
            state.loading = false;
        })
    }
}) 

export default gameSlice.reducer
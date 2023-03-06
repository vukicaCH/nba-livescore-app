import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    players: [],
    loading: false,
    error: null
}

const PLAYERS_URL = 'https://www.balldontlie.io/api/v1/players';

export const fetchPlayers = createAsyncThunk('players/fetchPlayers', async (search) => {
    const FINAL_URL = `${PLAYERS_URL}?search=${search}`

    const response = await axios.get(FINAL_URL)
    return response.data.data
})

const searchPlayersSlice = createSlice({
    name: 'searchPlayers',
    initialState,
    reducers: {
        deletePlayers(state) {
            state.players = []
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPlayers.pending, (state, action) => {
                state.players = [];
                state.loading = true;
            })
            .addCase(fetchPlayers.fulfilled, (state, action) => {
                state.players = action.payload
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchPlayers.rejected, (state, action) => {
                state.players = [];
                state.loading = false;
                state.error = action.error
            })
    }
})

export const { deletePlayers } = searchPlayersSlice.actions

export default searchPlayersSlice.reducer
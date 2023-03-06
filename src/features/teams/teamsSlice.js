import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    teams: [],
    error: null
}

const TEAMS_URL = 'https://www.balldontlie.io/api/v1/teams'

export const fetchTeams = createAsyncThunk('teams/fetchTeams', async () => {
    const response = await axios.get(TEAMS_URL)
    return response.data.data;
})

const teamsSlice = createSlice({
    name: 'teams',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchTeams.fulfilled, (state, action)=>{
                state.teams = action.payload;
            })
            .addCase(fetchTeams.rejected, (state, action)=>{
                state.teams = []
                state.error = action.error
            })
    }
})

export default teamsSlice.reducer
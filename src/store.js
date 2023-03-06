import {configureStore} from '@reduxjs/toolkit'
import gamesReducer from './features/games/gamesSlice'
import gameReducer from './features/games/gameSlice'
import gameStatsReducer from './features/games/gameStatsSlice'
import dateReducer from './features/date/dateSlice'
import playerReducer from './features/players/playerSlice'
import playerInfoReducer from './features/players/playerInfoSlice'
import teamsReducer from './features/teams/teamsSlice'
import homeGamesReducer from './features/h2h/homeGamesSlice'
import visitorGamesReducer from './features/h2h/visitorGamesSlice'
import searchPlayersReducer from './features/players/searchPlayersSlice'

export const store = configureStore({
    reducer:{
        games: gamesReducer,
        game: gameReducer,
        gameStats: gameStatsReducer,
        date: dateReducer,
        homeGames: homeGamesReducer,
        visitorGames: visitorGamesReducer,
        player: playerReducer,
        playerInfo: playerInfoReducer,
        searchPlayers: searchPlayersReducer,
        teams: teamsReducer
    }
})
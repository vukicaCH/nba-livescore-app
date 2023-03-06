import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPlayerInfo } from '../../features/players/playerInfoSlice'
import { fetchPlayer } from '../../features/players/playerSlice'
import { useParams } from 'react-router-dom'
import PlayerInfo from './PlayerInfo'
import PlayerGames from './PlayerGames'
import PlayerSeason from './PlayerSeason'
import { getCurrentSeason } from '../../helper'

const Player = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const [season, setSeason] = useState(getCurrentSeason());

    const changeSeason = (season) => {
        console.log(season);
        setSeason(season);
    }

    useEffect(() => {
        dispatch(fetchPlayerInfo(id));
        dispatch(fetchPlayer({id, season}));
    }, [id, season])

    return (
        <div>
            <PlayerInfo />
            <PlayerSeason season={season} changeSeason={changeSeason}/>
            <PlayerGames />
        </div>
    )
}

export default Player
import React from 'react'
import GameStatsInfoTeam from './GameOverviewInfoTeam'
import GameStatsInfoData from './GameOverviewInfoData';
import useStyles from '../../../styles';
import { useSelector } from 'react-redux';
import { getTeam } from '../../../helper';

const GameOverview = () => {

  const classes = useStyles();

  const game = useSelector(state => state.game.game);
  const teams = useSelector(state => state.teams.teams);

  const homeTeam = getTeam(teams, game?.home_team?.id)
  const visitorTeam = getTeam(teams, game?.visitor_team?.id);


  return (
    <div className={classes.gameStatsInfo}>
      <GameStatsInfoTeam team={homeTeam}/>
      <GameStatsInfoData
        game={game}
      />
      <GameStatsInfoTeam team={visitorTeam}/>
    </div>
  )
}

export default GameOverview
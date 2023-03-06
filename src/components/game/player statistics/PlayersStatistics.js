import { useState } from 'react'
import { useSelector } from 'react-redux';
import { getTeam } from '../../../helper';
import PlayerStatistics from './PlayerStatistics';
import NoStatsAvailable from './NoStatsAvailable';
import PlayersStatisticsSkeleton from './PlayersStatisticsSkeleton';
import PlayersStatisticsMenu from './PlayersStatisticsMenu';
import useStyles from '../../../styles';
import PlayerStatisticsHead from './PlayerStatisticsHead';

const PlayersStatistics = () => {

  const classes = useStyles();

  const game = useSelector(state => state.gameStats.game);
  const loading = useSelector(state => state.gameStats.loading);
  const teams = useSelector(state => state.teams.teams)

  const homeTeam = getTeam(teams, game[0]?.game.home_team_id)
  const visitorTeam = getTeam(teams, game[0]?.game.visitor_team_id)

  const [filter, setFilter] = useState('All');

  const handleClick = (data) => setFilter(data);

  const players_stats = game.filter(player => {
    if (filter === 'All') {
      return player;
    }

    return player?.team.abbreviation === filter
  }).map(player => <PlayerStatistics key={player?.id} playerStats={player} />)

  if (loading) {
    return <PlayersStatisticsSkeleton />
  }


  return (
    players_stats.length ?
      <div>
        <PlayersStatisticsMenu
          filterStats={handleClick}
          homeTeam={homeTeam}
          visitorTeam={visitorTeam}
        />
        <div className={classes.playersStatistics}>
          <PlayerStatisticsHead />
          {players_stats}
        </div>
      </div>
      :
      <NoStatsAvailable />
  )
}

export default PlayersStatistics


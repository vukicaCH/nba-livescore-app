import { useState } from 'react';
import PlayerGame from './PlayerGame';
import PlayerGamesSkeleton from './PlayerGamesSkeleton';
import PlayerGamesHead from './PlayerGamesHead';
import { useSelector } from 'react-redux';
import NoStatsAvailable from '../game/player statistics/NoStatsAvailable'
import ShowMore from './ShowMore';
import ErrorPage from '../ErrorPage';

const PlayerGames = () => {

  const loading = useSelector(state => state.player.loading);
  const playerStats = useSelector(state => state.player.player);
  const error = useSelector(state => state.player.error);

  const [perPage, setPerPage] = useState(10);

  const showMore = () => {
    if (perPage >= 100) {
      console.log(perPage);
      return;
    }

    setPerPage((prevState) => prevState + 10);
  }

  const playerGamesList = playerStats.slice(0, perPage)
    .map(game => <PlayerGame key={game?.id} game={game} />)

  if (error) {

    return (
      <ErrorPage message='We ran into a problem.' />
    )
  }

  return (
    loading ?
      <PlayerGamesSkeleton />
      :
      <div>
        {
          playerStats.length ?
            <>
              <PlayerGamesHead />
              {playerGamesList}
              <ShowMore showMoreGames={showMore} />
            </>
            :
            <NoStatsAvailable />
        }

      </div>
  );
}

export default PlayerGames;
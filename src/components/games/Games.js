import { useEffect } from 'react';
import Game from './Game';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../../features/games/gamesSlice';
import GameDatePicker from './GameDatePicker';
import NoGamesAvailable from './NoGamesAvailable';
import ErrorPage from '../ErrorPage';
import { Link } from 'react-router-dom';
import GamesSkeleton from './GamesSkeleton';

const Games = () => {
  const dispatch = useDispatch();

  const games = useSelector(state => state.games.games);
  const loading = useSelector(state => state.games.loading);
  const error = useSelector(state => state.games.error);
  const date = useSelector(state => state.date.date);

  const gameList = games.map(game => <Game key={game?.id} game={game} />);

  useEffect(() => {
    dispatch(fetchGames(date))
  }, [date])

  if (error) {
    return (
      <ErrorPage message='We ran into a problem.'>
        <Link to='/' onClick={() => window.location.reload()}>Home Page</Link>
      </ErrorPage>
    )
  }



  return (
    <div>
      <GameDatePicker date={date} />
      {
        loading ?
          <GamesSkeleton />
          :
          games.length ? gameList : <NoGamesAvailable />
      }
    </div>
  );
}

export default Games;
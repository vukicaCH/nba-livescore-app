import { useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGameStats } from '../../features/games/gameStatsSlice'
import { fetchGame } from '../../features/games/gameSlice'
import { fetchHomeGames } from '../../features/h2h/homeGamesSlice';
import { fetchVisitorGames } from '../../features/h2h/visitorGamesSlice';
import GameOverview from './game overview/GameOverview'
import GameMenu from './GameMenu'
import ErrorPage from '../ErrorPage'

const Game = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  const error = useSelector(state => state.game.error);

  useEffect(() => {
    dispatch(fetchGameStats(id));
    dispatch(fetchGame(id))
      .unwrap()
      .then((game)=>{
        dispatch(fetchHomeGames(game.home_team.id));
        dispatch(fetchVisitorGames(game.visitor_team.id));
      })
  }, [dispatch, id])

  if (error) {
    return (
      <ErrorPage message='We ran into a problem.' />
    )
  }

  return (
    <div>
          <GameOverview id={id} />
          <GameMenu />
          <Outlet />
    </div>
  )
}

export default Game
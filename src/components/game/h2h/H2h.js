import { useSelector } from 'react-redux'
import H2hGame from './H2hGame';
import { getTeam } from '../../../helper';
import H2hSkeleton from './H2hSkeleton';
import useStyles from '../../../styles';


const H2h = () => {

    const classes = useStyles();

    const game = useSelector(state => state.game.game);
    const homeGames = useSelector(state => state.homeGames.games)
    const visitorGames = useSelector(state => state.visitorGames.games);
    const teams = useSelector(state => state.teams.teams)

    const homeTeam = getTeam(teams, game.home_team?.id)
    const visitorTeam = getTeam(teams, game.visitor_team?.id)

    const homeGamesList = homeGames
        .slice(0, 5)
        .map(game => <H2hGame key={game?.id} game={game} />);

    const visitorGameList = visitorGames
        .slice(0, 5)
        .map(game => <H2hGame key={game?.id} game={game} />);

    return (
        homeGames.length && visitorGames.length ?
            <div>
                <h3 className={classes.h2hGamesHeader}>Last 5 Games: {homeTeam?.full_name}</h3>
                {homeGamesList}
                <h3 className={classes.h2hGamesHeader}>Last 5 Games: {visitorTeam?.full_name}</h3>
                {visitorGameList}
            </div> :
                <H2hSkeleton />
    )
}

export default H2h
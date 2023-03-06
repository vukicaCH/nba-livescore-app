import { useSelector } from 'react-redux';
import { getTeam } from '../../helper';
import useStyles from '../../styles';
import PlayerGameTeamsScore from './PlayerGameTeamsScore';
import PlayerNotInTheSquad from './PlayerNotInTheSquad';
import PlayerGameCell from './PlayerGameCell';

const PlayerGame = ({ game }) => {

    const classes = useStyles();

    const teams = useSelector(state => state.teams.teams);

    const gameDate = game?.game.date.slice(0, 10).split('-').join('/');
    const gameScore = game?.game;

    const homeTeam = getTeam(teams, gameScore.home_team_id)
    const visitorTeam = getTeam(teams, gameScore.visitor_team_id)

    const minutes = parseInt(game?.min);
    const points = game?.pts;
    const assists = game?.ast;
    const rebounds = game?.reb;
    const blocks = game?.blk;

    return (
        <div className={classes.playerGame}>
            <div className={classes.playerGameDate}>
                {gameDate}
            </div>
            <div>
                <PlayerGameTeamsScore
                    homeTeam={homeTeam}
                    visitorTeam={visitorTeam}
                    game={game}
                />
            </div>
            <div className={classes.playerGameStats}>
                {
                    minutes ?
                        <>
                            <PlayerGameCell data={minutes} />
                            <PlayerGameCell data={points} />
                            <PlayerGameCell data={assists} />
                            <PlayerGameCell data={rebounds} />
                            <div className={classes.playerBlocks}>
                                <PlayerGameCell data={blocks}/>
                            </div>
                        </> :
                        <PlayerNotInTheSquad />
                }
            </div>
        </div>
    )
}

export default PlayerGame;
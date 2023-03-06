import useStyles from '../../styles';
import GameTeam from './GameTeam';
import GameDetails from './GameDetails';

const Game = ({ game }) => {

    const classes = useStyles();

    return (
        <div className={classes.game}>
            <div className={classes.gameOverview}>
                <GameTeam team={game?.home_team} score={game?.home_team_score}/>
                <GameTeam team={game?.visitor_team} score={game?.visitor_team_score}/>
            </div>
            <GameDetails game={game} />
        </div>
    )
}

export default Game;
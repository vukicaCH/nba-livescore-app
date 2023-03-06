import React from 'react'
import useStyles from '../../styles'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import PlayerGameTeamScore from './PlayerGameTeamScore';

const PlayerGameTeamsScore = ({ homeTeam, visitorTeam, game }) => {

    const classes = useStyles();

    const homeTeamScore = game?.game.home_team_score;
    const visitorTeamScore = game?.game.visitor_team_score;

    return (
        <Button variant='text' className={classes.btnFullWidth}>
            <Link className={classes.link} to={`/game/${game?.game.id}`}>
                <div className={classes.playerGameTeamsScore}>
                    <PlayerGameTeamScore team={homeTeam} score={homeTeamScore} />
                    <PlayerGameTeamScore team={visitorTeam} score={visitorTeamScore} />
                </div>
            </Link>
        </Button>
    )
}

export default PlayerGameTeamsScore
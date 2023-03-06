import React from 'react'
import useStyles from '../../styles'
import { teamLogo } from '../../helper';

const PlayerGameTeamScore = ({team, score}) => {

    const classes = useStyles();

    const teamName = team.name;
    const teamSrc = teamLogo(team.abbreviation);

    return (
        <div className={classes.playerGameTeamScore}>
            <img
                className={classes.playerGameTeamImage}
                src={teamSrc}
                alt={teamName}
            />
            <h4 className={classes.playerGameTeamName}>{teamName}</h4>
            <span className={classes.playerGameTeamScorePoints}>{score}</span>
        </div>
    )
}

export default PlayerGameTeamScore
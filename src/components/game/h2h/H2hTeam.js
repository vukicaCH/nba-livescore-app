import React from 'react'
import useStyles from '../../../styles'
import { teamLogo } from '../../../helper';

const H2hTeam = ({team, score}) => {

    const classes = useStyles();

    const teamSrc = teamLogo(team?.abbreviation)

    return (
        <div className={classes.h2hTeam}>
            <img
                className={classes.h2hTeamLogo}
                src={teamSrc}
                alt={team?.full_name}
            />
            <h4 className={classes.h2hTeamName}>{team?.full_name}</h4>
            <span>{score}</span>
        </div>
    )
}

export default H2hTeam
import React from 'react'
import useStyles from '../../styles'
import { teamLogo } from '../../helper'

const GameTeam = ({ team, score }) => {

    const classes = useStyles();

    return (
        <div className={classes.gameTeam}>
            <img className={classes.gameTeamImage}
                src={teamLogo(team?.abbreviation)}
                alt={team?.full_name}
            />
            <h4 className={classes.gameTeamName}>{team?.full_name}</h4>
            {
                score ?
                    <span>{score}</span> :
                    ''
            }
        </div>
    )
}

export default GameTeam
import React from 'react'
import useStyles from '../../../styles'
import H2hTeam from './H2hTeam';
import H2hGameDetails from './H2hGameDetails';

const H2hGame = ({ game }) => {

    const classes = useStyles();
    const {
        id,
        home_team,
        home_team_score,
        visitor_team,
        visitor_team_score,
    } = game;

    return (
        <div className={classes.h2hGame}>
            <div className={classes.h2hStats}>
                <div className={classes.h2hTeams}>
                    <H2hTeam team={home_team} score={home_team_score}/>
                    <H2hTeam team={visitor_team} score={visitor_team_score}/>
                </div>
            </div>
            <H2hGameDetails id={id} />
        </div>
    )
}

export default H2hGame
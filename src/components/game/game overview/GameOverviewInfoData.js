import React from 'react'
import useStyles from '../../../styles'

const GameStatsInfoData = ({ game }) => {

    const classes = useStyles();

    const home_score = game?.home_team_score ? game?.home_team_score : '';
    const visitor_score = game?.visitor_team_score ? game?.visitor_team_score : '';

    return (
        <div className={classes.gameStatsInfoData}>
            {
                game?.home_team ?
                    <div className={classes.finalScore}>
                        <span>{home_score} - {visitor_score}</span>
                    </div>
                    :
                    <div style={{margin: '0 10px'}}></div>
            }
        </div>
    )
}

export default GameStatsInfoData
import React from 'react'
import useStyles from '../../styles'

const NoGamesAvailable = () => {

    const classes = useStyles();

  return (
    <div className={classes.noGamesAvailable}>
        <h1 className={classes.noStatsAvailableTitle}>
          NO GAMES AVAILABLE.
        </h1>
            <p className={classes.noStatsAvailableText}>
                There are no games for this date.<br></br>
                Please choose another date.
            </p>
    </div>
  )
}

export default NoGamesAvailable
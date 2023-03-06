import React from 'react'
import useStyles from '../../../styles'

const PlayerStatisticsCell = ({data}) => {

    const classes = useStyles();

    return (
        <div className={classes.playerStatisticsCell}>
            {data === 0 ? '-' : data}
        </div>
    )
}

export default PlayerStatisticsCell
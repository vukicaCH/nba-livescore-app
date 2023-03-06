import React from 'react'
import useStyles from '../../styles'

const PlayerGameCell = ({data}) => {

    const classes = useStyles();

    return (
        <div className={classes.playerGameCell}>
            {data}
        </div>
    )
}

export default PlayerGameCell
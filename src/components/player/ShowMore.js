import React from 'react'
import useStyles from '../../styles'

const ShowMore = ({showMoreGames}) => {
    const classes = useStyles();

    return (
        <div className={classes.showMore}>
            <span onClick={showMoreGames}>Show More...</span>
        </div>
    )
}

export default ShowMore
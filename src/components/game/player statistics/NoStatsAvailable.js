import React from 'react'
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import useStyles from '../../../styles'

const NoStatsAvailable = () => {

    const classes = useStyles();

    return (
        <div className={classes.noStatsAvailable}>
            <SportsBasketballIcon sx={{fontSize: '100px'}} className={classes.noStatsAvailableIcon}/>
            <h1 className={classes.noStatsAvailableTitle}>NO DATA AVAILABLE</h1>
        </div>
    )
}

export default NoStatsAvailable
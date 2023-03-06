import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useStyles from '../../../styles';

const PlayersStatisticsMenu = ({filterStats, homeTeam, visitorTeam}) => {

    const classes = useStyles();

    return (
        <Stack direction="row" spacing={1} className={classes.playersStatisticsMenu}>
            <Chip
                label='All'
                onClick={() => filterStats('All')}
            />
            <Chip
                label={homeTeam?.abbreviation}
                style={{ fontWeight: '800' }}
                onClick={() => filterStats(homeTeam?.abbreviation)}
            />
            <Chip
                label={visitorTeam?.abbreviation}
                style={{ fontWeight: '800' }}
                onClick={() => filterStats(visitorTeam?.abbreviation)}
            />
        </Stack>
    )
}

export default PlayersStatisticsMenu
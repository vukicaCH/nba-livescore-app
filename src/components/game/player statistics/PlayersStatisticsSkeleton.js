import React from 'react'
import { Skeleton } from '@mui/material';
import Stack from '@mui/material/Stack';
import useStyles from '../../../styles';

const PlayersStatisticsSkeleton = () => {

    const classes = useStyles();

    return (
        <div className={classes.playersStatisticsSkeleton}>
            <Skeleton variant='rounded' className={classes.playersStatisticsSkeletonMenu} />
            <Stack spacing={1}>
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />
                <Skeleton variant='rounded' className={classes.playerStatisticsSkeleton} />                
            </Stack>
        </div>
    )
}

export default PlayersStatisticsSkeleton
import React from 'react'
import { Skeleton } from '@mui/material';
import Stack from '@mui/material/Stack';
import useStyles from '../../styles';

const PlayerGamesSkeleton = () => {

    const classes = useStyles();

    return (
        <Stack spacing={1} className={classes.playerGamesSkeleton}>
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
            <Skeleton variant='rounded' className={classes.playerGameSkeleton} />
        </Stack>
    )
}

export default PlayerGamesSkeleton
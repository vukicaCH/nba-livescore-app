import React from 'react'
import { Stack } from '@mui/system';
import { Skeleton } from '@mui/material';
import useStyles from '../../styles'

const GamesSkeleton = () => {

    const classes = useStyles();

    return (
        <Stack spacing={1} className={classes.gamesSkeleton}>
            <Skeleton variant='rounded' className={classes.gameSkeleton}/>
            <Skeleton variant='rounded' className={classes.gameSkeleton} />
            <Skeleton variant='rounded' className={classes.gameSkeleton} />
            <Skeleton variant='rounded' className={classes.gameSkeleton} />
            <Skeleton variant='rounded' className={classes.gameSkeleton} />
        </Stack>
    )
}

export default GamesSkeleton
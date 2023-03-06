import React from 'react'
import { Skeleton } from '@mui/material';
import { Stack } from '@mui/material';
import useStyles from '../../../styles';

const H2hSkeleton = () => {

    const classes = useStyles()

    return (
        <Stack spacing={1} className={classes.h2hSkeleton}>
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <br></br>
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
            <Skeleton variant='rounded' className={classes.h2hGameSkeleton} />
        </Stack>
    )
}

export default H2hSkeleton
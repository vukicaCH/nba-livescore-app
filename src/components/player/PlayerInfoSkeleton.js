import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import useStyles from '../../styles';

const PlayerInfoSkeleton = () => {

    const classes = useStyles();

    return (
        <Stack direction='row' spacing={1} className={classes.playerInfoSkeleton}>
            <Skeleton variant='rounded' width={80} height={80} />
            <Stack style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Skeleton variant='text' width={80} />
                <Skeleton variant='text' width={80} />
                <Skeleton variant='text' width={80} />
            </Stack>
        </Stack>
    )
}

export default PlayerInfoSkeleton
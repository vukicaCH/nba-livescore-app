import React from 'react'
import { Skeleton } from '@mui/material';
import Stack from '@mui/material/Stack';
import useStyles from '../../../styles';

const SearchResultsSkeleton = () => {

    const classes = useStyles();

    return (
        <Stack spacing={1} className={classes.searchResultsSkeleton}>
            <Skeleton variant='rounded' className={classes.searchResultSkeleton} />
            <Skeleton variant='rounded' className={classes.searchResultSkeleton} />
            <Skeleton variant='rounded' className={classes.searchResultSkeleton} />
            <Skeleton variant='rounded' className={classes.searchResultSkeleton} />
            <Skeleton variant='rounded' className={classes.searchResultSkeleton} />
        </Stack>
    )
}

export default SearchResultsSkeleton
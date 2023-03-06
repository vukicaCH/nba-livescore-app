import React from 'react'
import useStyles from '../../../styles'
import SearchResult from './SearchResult';
import SearchResultsSkeleton from './SearchResultsSkeleton';
import { useSelector } from 'react-redux';

const SearchResults = ({closeDialog }) => {
    const classes = useStyles();

    const searchResults = useSelector(state => state.searchPlayers.players);
    const loading = useSelector(state => state.searchPlayers.loading);

    const search_results = searchResults.map(result =>
        <SearchResult
            key={result?.id}
            result={result}
            closeDialog={closeDialog}
        />
    )

    if(loading){
        return <SearchResultsSkeleton />
    }

    return (
        <div className={classes.searchResults}>
            {search_results}
        </div>
    )
}

export default SearchResults
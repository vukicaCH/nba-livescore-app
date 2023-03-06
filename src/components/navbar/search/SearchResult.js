import React from 'react'
import { teamLogo } from '../../../helper'
import { Link } from 'react-router-dom'
import useStyles from '../../../styles'
import { Button } from '@material-ui/core'

const SearchResult = ({ result, closeDialog }) => {

    const classes = useStyles();

    const teamSrc = teamLogo(result?.team.abbreviation);

    return (
        <Button variant='text' color='primary' className={classes.btnFullWidth}>
            <Link
                to={`/player/${result?.id}`}
                className={classes.link}
                onClick={closeDialog}
            >
                <div className={classes.searchResult}>
                    <div>
                        <img
                            className={classes.playerStatsTeamImage}
                            src={teamSrc}
                            alt={result?.team.full_name} />
                    </div>
                    <div className={classes.searchResultData}>
                        <h4>{`${result?.first_name} ${result?.last_name}`}</h4>
                        <span>
                            {result?.team.full_name}
                        </span>
                    </div>
                </div>
            </Link>
        </Button>

    )
}

export default SearchResult
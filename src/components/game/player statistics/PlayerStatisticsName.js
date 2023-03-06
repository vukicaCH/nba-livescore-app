import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from '../../../styles'

const PlayerStatisticsName = ({player, abbreviation}) => {

    const classes = useStyles();

    return (
        <div className={classes.playerStatisticsName}>
            <Button
                variant='text'
                color='primary'
                className={classes.btn}
            >
                <Link
                    to={`/player/${player?.id}`}
                    className={classes.link}
                >
                    <span
                        className={classes.playerStatisticsFullName}
                    >
                        {`${player.last_name} ${player.first_name[0]}. (${abbreviation})`}
                    </span>
                </Link>
            </Button>
        </div>
    )
}

export default PlayerStatisticsName
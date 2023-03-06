import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../../styles'

const GameDetails = ({ game }) => {

    const classes = useStyles();

    return (
        <div className={classes.gameLink}>
            {
                game.period === 0 ?
                    <div>
                        {game?.status}
                    </div> :
                    ''
            }
            <Button
                variant='text'
                color='primary'
                className={classes.btn}
            >
                <Link
                    className={classes.link}
                    to={`/game/${game.id}`}
                >
                    Game Details
                </Link>
            </Button>
        </div>
    )
}

export default GameDetails
import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from '../../../styles'

const H2hGameDetails = ({ id }) => {

    const classes = useStyles();

    return (
        <div className={classes.h2hGameDetails}>
            <Button
                variant='text'
                color='primary'
                className={classes.btn}
            >
                <Link
                    to={`/game/${id}`}
                    className={classes.link}
                >
                    Game Details
                </Link>
            </Button>
        </div>
    )
}

export default H2hGameDetails
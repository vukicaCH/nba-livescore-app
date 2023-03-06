import React from 'react'
import ReusableTooltip from '../ReusableTooltip'
import useStyles from '../../styles'

const PlayerGamesHead = () => {

    const classes = useStyles();

    return (
        <div className={classes.playerGame}>
            <div className={classes.playerGameDate}>
                <ReusableTooltip
                    title='date'
                    icon='date'
                    type='table-head'
                />
            </div>
            <div>
            </div>
            <div className={classes.playerGameStats}>
                <div className={classes.playerGameCell}>
                    <ReusableTooltip
                        title='Minutes Played'
                        icon='MIN'
                        type='table-head'
                    />
                </div>
                <div className={classes.playerGameCell}>
                    <ReusableTooltip
                        title='Points'
                        icon='PTS'
                        type='table-head'
                    />
                </div>
                <div className={classes.playerGameCell}>
                    <ReusableTooltip
                        title='Assists'
                        icon='AST'
                        type='table-head'
                    />
                </div>
                <div className={classes.playerGameCell}>
                    <ReusableTooltip
                        title='Rebounds'
                        icon='REB'
                        type='table-head'
                    />
                </div>
                <div className={`${classes.playerGameCell} ${classes.playerBlocks}`}>
                    <ReusableTooltip
                        title='Blocks'
                        icon='BLK'
                        type='table-head'
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayerGamesHead
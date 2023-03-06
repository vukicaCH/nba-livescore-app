import useStyles from '../../../styles';
import ReusableTooltip from '../../ReusableTooltip'

const PlayerStatisticsHead = () => {

    const classes = useStyles();

    return (
        <div className={classes.playerStatistics}>
            <div className={classes.playerStatisticsName}>
                <ReusableTooltip
                    title='Player Name'
                    icon='NAME'
                />
            </div>
            <div className={classes.playerStatisticsCell}>
                <ReusableTooltip
                    title='Points'
                    icon='PTS'
                />
            </div>
            <div className={classes.playerStatisticsCell}>
                <ReusableTooltip
                    title='Rebounds'
                    icon='REB'
                />
            </div>
            <div className={classes.playerStatisticsCell}>
                <ReusableTooltip
                    title='Assists'
                    icon='AST'
                />
            </div>
            <div className={classes.playerStatisticsCell}>
                <ReusableTooltip
                    title='Blocks'
                    icon='BLK'
                />
            </div>
        </div>
    )
}

export default PlayerStatisticsHead
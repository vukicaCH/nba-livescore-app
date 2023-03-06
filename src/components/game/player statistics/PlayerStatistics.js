import useStyles from '../../../styles';
import PlayerStatisticsName from './PlayerStatisticsName';
import PlayerStatisticsCell from './PlayerStatisticsCell';

const PlayerStatistics = ({ playerStats }) => {

    const classes = useStyles()

    const { player, team, pts, reb, ast, blk, min } = playerStats;

    const minutes = parseInt(min);

    return (
        minutes ?
            <div className={classes.playerStatistics}>
                <PlayerStatisticsName player={player} abbreviation={team?.abbreviation} />
                <PlayerStatisticsCell data={pts} />
                <PlayerStatisticsCell data={reb} />
                <PlayerStatisticsCell data={ast} />
                <PlayerStatisticsCell data={blk} />
            </div> :
            ''

    )
}

export default PlayerStatistics;
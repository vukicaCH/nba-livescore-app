import React from 'react'
import useStyles from '../../styles';
import { teamLogo } from '../../helper';
import PlayerInfoSkeleton from './PlayerInfoSkeleton';
import { useSelector } from 'react-redux';
import ErrorPage from '../ErrorPage';

const PlayerInfo = () => {

  const classes = useStyles();

  const loading = useSelector(state => state.playerInfo.loading)
  const playerInfo = useSelector(state => state.playerInfo.playerInfo);
  const error = useSelector(state => state.playerInfo.error);

  const teamSrc = teamLogo(playerInfo?.team?.abbreviation)

  if (error) {

    return (
        <ErrorPage message='We ran into a problem.' />
    )
}

  return (
    loading ?
    <PlayerInfoSkeleton />
    :
    <div className={classes.playerInfo}>
        <div className={classes.playerData}>
            <img className={classes.playerInfoImage} src={teamSrc} alt={playerInfo?.team?.full_name} />
            <div className={classes.playerText}>
                <h4 className={classes.playerName}>
                  {`${playerInfo?.first_name} ${playerInfo?.last_name}`} 
                </h4>
                <span className={classes.playerSpan}>
                  <b>Position: </b>
                  <span className={classes.playerSpanStats}>
                    {playerInfo?.position}
                  </span>
                </span>
                <span className={classes.playerSpan}>
                  <b>Team: </b>
                  <span className={classes.playerSpanStats}>
                    {playerInfo?.team?.full_name}
                  </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default PlayerInfo
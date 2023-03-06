import React from 'react'
import useStyles from '../../../styles'
import { teamLogo } from '../../../helper';
import Skeleton from '@mui/material/Skeleton';

const GameStatsInfoTeam = ({ team }) => {

  const classes = useStyles();

  return (
    <div className={classes.gameStatsInfoTeam}>
      {
        team ?
          <>
            <img
              className={classes.gameOverviewTeamImage}
              src={teamLogo(team?.abbreviation)}
              alt={team?.full_name}
            />
            <h4 style={{width: '100px'}}>{team?.full_name}</h4>
          </> :
          <>
            <Skeleton variant="rounded" width={70} height={70} />
          </>
      }
    </div>
  )
}

export default GameStatsInfoTeam
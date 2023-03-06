import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useStyles from '../styles';

const ReusableTooltip = ({ title, icon }) => {
  const classes = useStyles();

  return (
    <Tooltip title={title}>
      <IconButton className={classes.tooltip}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}

export default ReusableTooltip
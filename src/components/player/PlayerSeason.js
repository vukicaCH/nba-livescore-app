import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getAllSeasons } from '../../helper';
import useStyles from '../../styles';

const PlayerSeason = ({season, changeSeason}) => {

  const classes = useStyles();

  const handleChange = (e) => {
    changeSeason(e.target.value);
  };

  const seasons = getAllSeasons()

  let seasonItems = seasons
      .map(season => <MenuItem value={season}>Season: {season}/{season+1}</MenuItem> )

  return (
    <Box sx={{ minWidth: 120 }} className={classes.playerSeason}>
      <FormControl>
        <Select
          value={season}
          onChange={handleChange}
        >
          {seasonItems}
        </Select>
      </FormControl>
    </Box>
  );
}

export default PlayerSeason
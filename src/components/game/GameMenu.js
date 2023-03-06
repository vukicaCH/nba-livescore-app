import React from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import useStyles from '../../styles';
import { useNavigate } from 'react-router-dom';


const GameMenu = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Stack direction="row" spacing={1} className={classes.gameMenu}>
            <Chip
                label='Overview'
                onClick={()=>{navigate('')}}
            />
            <Chip
                label='H2H'
                onClick={()=>{navigate('h2h')}}
            />
          </Stack>
    )
}

export default GameMenu
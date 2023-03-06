import * as React from 'react';
import Button from '@mui/material/Button';
import SearchDialog from './search/SearchDialog';
import useStyles from '../../styles';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const classes = useStyles();

  return(
    <div className={classes.navbar}>
      <Button variant='text' className={classes.btn}>
        <Link to='/' className={classes.link}>Home</Link>
      </Button>
      <SearchDialog />
    </div>
  )
}

export default Navbar;
import React from 'react'
import useStyles from '../styles'
import { Link, useNavigate } from 'react-router-dom';


const ErrorPage = ({ message }) => {

  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    navigate(0)
  }


  return (
    <div className={classes.errorPageBackground}>
      <div className={classes.errorData}>
        <h1 className={classes.errorName}>ERROR</h1>
        <p className={classes.errorMessage}>
          {message}
        </p>
        <div className={classes.errorLink}>
          <Link to='/' onClick={handleClick}>Home Page</Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Readmore from '../Readmore';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.75)',
    height: 'auto',
    border: (props) => `10px solid ${props.borderColor}`,
    boxShadow: '20px 4px 24px rgba(47, 47, 47, 0.28)',
    flexFlow: 'column nowrap',
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  heading: {
    textAlign: 'center',
  },
}));

const InspirationBox1 = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.heading}>
        <Typography variant='h6'>{props.heading}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='body1'>{props.text}</Typography>
      <Readmore 
      readMore={props.readMore}
      />
      </Grid>
    </Grid>
  );
};

InspirationBox1.propTypes = {
  borderColor: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default InspirationBox1;

import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    height: 'auto',
  },
  textContainer: {
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.textColor,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
    padding: theme.spacing(8),
  },
  imgContainer: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left center',
  },
}));

const InspirationBox3 = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item md={6} xs={12} className={classes.textContainer}>
        <Typography variant='h5'>{props.heading}</Typography>
        <Typography variant='body1'>{props.text}</Typography>
      </Grid>
      <Grid item md={6} xs={12} className={classes.imgContainer}></Grid>
    </Grid>
  );
};

InspirationBox3.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InspirationBox3;

import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Readmore from '../Readmore';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: (props) => props.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(5),
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
      margin: theme.spacing(1),
    },
  },
  heading: {
    textAlign: 'center',
  },
}));

const InspirationBox4 = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container spacing={3} className={classes.textContainer}>
        <Grid item xs={11}>
          <Typography variant='h6' className={classes.heading}>
            {props.heading}
          </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography variant='body1'>{props.text}</Typography>
          <Readmore 
      readMore={props.readMore}
      />
        </Grid>
      </Grid>
    </Grid>
  );
};

InspirationBox4.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InspirationBox4;

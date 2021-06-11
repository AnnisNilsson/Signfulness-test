import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignContent: 'center',
    },
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '35vh',
    margin: '3vh',
  },
  heading: {
    backgroundColor: '#D9BAAF',
    color: '#263B36',
    textAlign: 'center',
    padding: '10px 0 10px 0',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
  },
  text: {
    marginTop: theme.spacing(7),
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#517B7B',
    width: '50%',
  },
}));

const SectionSecond = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} md={4}>
        <Box className={classes.box}>
          <img src={props.img} alt='yoga' className={classes.img}></img>
        </Box>
      </Grid>
      <Grid item xs={8} md={4}>
        <Typography variant='h2' className={classes.heading}>
          {props.title}
        </Typography>
        <Typography variant='body1' className={classes.text}>
          {props.description}{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};
SectionSecond.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default SectionSecond;

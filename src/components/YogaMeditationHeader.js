import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import yoga from '../media/yogatext.png';
import meditation from '../media/meditationtext.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100vw',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  img: {
    objectFit: 'contain',
    backgroundPosition: 'center',
    height: '40vh',
    width: '100%',
  },
}));

const YogaMeditationHeader = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} md={4}>
        <img src={yoga} alt='yoga' className={classes.img}></img>
      </Grid>
      <Grid item xs={8} md={4}>
        <img src={meditation} alt='meditation' className={classes.img}></img>
      </Grid>
    </Grid>
  );
};

export default YogaMeditationHeader;

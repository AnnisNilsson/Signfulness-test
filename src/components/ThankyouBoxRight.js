import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '5vh 0 5vh 0',
  },
  box: {
    backgroundColor: '#517B7B',
    display: 'flex',
    justifyContent: 'space-evenly',
    boxShadow: '10px 13px 20px rgba(0, 0, 0, 0.25);',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      padding: '5vh',
    },
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '35vh',
    padding: '5vh',
    position: 'relative',
    left: '30%',
    [theme.breakpoints.down('sm')]: {
      right: '0%',
      height: '22vh',
    },
  },
  textBox: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: '#FFFFFF',
  },
}));

const ThankYouBoxRight = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} md={8} className={classes.box}>
        <Grid item xs={12} md={4} className={classes.textBox}>
          <Typography variant='h3'>{props.Name}</Typography>
          <Typography variant='body1'>{props.Text}</Typography>
        </Grid>
        <Grid item xs={8} md={4}>
          <img src={props.img} alt='yoga' className={classes.img}></img>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ThankYouBoxRight;

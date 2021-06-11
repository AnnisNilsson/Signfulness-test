import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      alignContent: 'center',
    },
  },
  boxOne: {
    margin: '10vh 0 10vh 0',
    padding: '4vh',
    backgroundColor: '#517B7B',
    color: '#FFFF',
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '35vh',
    padding: '3vh',
  },
  textBox: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
}));

const SectionOne = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={[classes.box, classes.boxOne]}>
      <Grid item xs={8} md={4}>
        <img src={props.img} alt={props.alt} className={classes.img}></img>
      </Grid>
      <Grid item xs={8} md={4} className={classes.textBox}>
        <Typography variant='h2'>{props.title}</Typography>
        <Typography variant='body1' className={classes.text}>
          {props.description}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SectionOne;

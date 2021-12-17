import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import yoga from '../../media/yoga.png';
import meditation2 from '../../media/meditation2.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    padding: '3vh',
    [theme.breakpoints.down('sm')]: {
      height: '45vh',
    }
  },
  textBox: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },

  text: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
  },
  heading: {
    backgroundColor: '#517B7B',
    color: '#FFFF',
    textAlign: 'center',
    padding: '10px 0 10px 0',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
  },
  box: {
    backgroundColor: '#D9BAAF',
    width: '50%',
  },
}));

const SectionFirst = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} md={4}>
        <Typography variant='h2' className={classes.heading}>
          {props.title}
        </Typography>
        <Typography variant='body1' className={classes.text}>
          {props.description}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className={classes.box}>
          <img src={props.img} alt='yoga' className={classes.img}></img>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SectionFirst;

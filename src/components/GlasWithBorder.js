import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  glas: {
    backgroundColor: '#6A9E9E',
    opacity: 0.42,
    height: '80vh',
    borderColor: '#ffff',
    boxShadow: '20px 4px 24px rgba(47, 47, 47, 0.28)',
  },
  leftBorder: {
    borderLeft: '9px solid teal',
    position: 'relative',
    right: 8,
    top: 0,
    height: '60%',
  },
  rightBorder: {
    borderRight: '9px solid teal',
    position: 'relative',
    left: 8,
    bottom: 150,
    height: '60%',
  },
}));
const GlasWithBorder = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={8} className={classes.glas}>
        <div className={classes.leftBorder} />
        <div className={classes.rightBorder} />
      </Grid>
    </Grid>
  );
};

export default GlasWithBorder;

import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        background: 'black',
        height:'40vh'
       
      },
}));

const Yoga = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.container}>
    <h1>test</h1>
    </Grid>
  );
};

export default Yoga;

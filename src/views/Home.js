import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import VideoSuggestion from '../components/VideoSuggestion/VideoSuggestion';
import Rectangle from '../components/Rectangle';
import CategoryBoxes from '../components/CategoryBoxes/CategoryBoxes';
import Triangle from '../components/Triangle';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2vh',
  },
  categoryheading: {
    textAlign: 'center',
    margin: theme.spacing(8),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={10} className={classes.container}>
      <Rectangle top='75vh' />
      <Triangle top='125vh' bottom={0} />
      <Grid item xs={12}>
        <Header
          heading='Godmorgon'
          img="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"
        />
      </Grid>
      <Grid item xs={12}>
        <VideoSuggestion />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h2' className={classes.categoryheading}>
          Kategorier
        </Typography>
        <CategoryBoxes />
      </Grid>
    </Grid>
  );
};
export default Home;

import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import VideoSuggestion from '../components/VideoSuggestion/VideoSuggestion';
import Rectangle from '../components/Rectangle';
import CategoryBoxes from '../components/CategoryBoxes/CategoryBoxes';
import Triangle from '../components/Triangle';
import start from '../media/start.png'
import Footer from '../components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '10vh',
    [theme.breakpoints.down('sm')]:{
    padding:'2vh'
    }
  },
  headerSection:{
    [theme.breakpoints.down('sm')]:{
      display:'none',
    }
  },
  categoryheading: {
    textAlign: 'center',
    margin: theme.spacing(8),
   
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.container}>
      <Rectangle top='88vh' />
      {/* <Triangle top='125vh' bottom={0} /> */}
      <Grid item xs={12} className={classes.headerSection}>
        <Header
          heading='Godmorgon'
          // img="https://images.unsplash.com/photo-1488711500009-f9111944b1ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
          img={start}
       />
      </Grid>
      <Grid item xs={12}>
        <VideoSuggestion />
      </Grid>
      {/* <Grid item xs={12}>
        <Typography variant='h2' className={classes.categoryheading}>
          Kategorier
        </Typography>
        <CategoryBoxes />
      </Grid> */}
      <Footer />
    </Grid>
  );
};
export default Home;

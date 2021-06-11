import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Rectangle from '../components/Rectangle';
import Triangle from '../components/Triangle';
import CategoryDescription from '../components/CategoryDescription';
import handwithplant from '../media/handwithplant.svg';
import VideoContainers from '../components/VideoCard/VideoContainers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  videoContainers: {
    marginLeft: '5vw',
  },
}));

const Meditation = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={10} className={classes.container}>
      <Rectangle top={'50vh'} />
      <Triangle top={'100vh'} />
      <Grid item xs={12}>
        <Typography variant='h1' className={classes.heading}>
          Meditation
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Björn Natthiko Lindeblad'
          description='Natthiko var namnet Björn fick när han blev buddhistmunk i den thailändska skogstraditionen 1992. Han återvände till Sverige och ett liv i byxor hösten 2008. Natthiko betyder "Den som växer i visdom". Det är fortfarande polstjärnan i Björns liv.'
        />
      </Grid>
      <Grid item xs={12} className={classes.videoContainers}>
        <VideoContainers videos={props.videos} />
      </Grid>
    </Grid>
  );
};
export default Meditation;

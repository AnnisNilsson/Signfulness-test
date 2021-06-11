import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import VideoBox from './VideoBox';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1620590989038-21169e3ad84c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    heading: 'RUBRIK2',
    description: 'Lorem ipsum dolores.',
  },
  {
    image:
      'https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    heading: 'RUBRIK',
    description: 'Lorem ipsum dolores.',
  },
];

const useStyles = makeStyles((theme) => ({
  videoboxContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  video: {
    height: '50vh',
  },
  textContainer: {
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  videos: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  },
}));
const VideoSuggestion = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.videoboxContainer}>
      <Grid item xs={5} className={classes.textContainer}>
        <Typography variant='h2'>Rubrik</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet.</Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={5} className={classes.videoboxContainer}>
        <Grid item xs={5} className={classes.video}>
          <VideoBox
            backgroundImage='https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            heading='Rubrik1'
            description='Lorem ipsum dolor sit amet.'
          />
        </Grid>
        <Grid item xs={5} className={classes.videos}>
          {data.map((data) => {
            return (
              <VideoBox
                key={data.image}
                backgroundImage={data.image}
                heading={data.heading}
                description={data.description}
                marginBottom={30}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoSuggestion;

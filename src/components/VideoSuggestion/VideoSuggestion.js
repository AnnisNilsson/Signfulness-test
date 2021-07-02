import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import VideoBox from './VideoBox';

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1620590989038-21169e3ad84c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    heading: 'MEDITATION',
    description: 'hitta ditt inre lugn',
  },
  {
    image:
      'https://images.pexels.com/photos/3326362/pexels-photo-3326362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    heading: 'YOGA',
    description: 'hitta din styrka',
  },
];

const useStyles = makeStyles((theme) => ({
  videoboxContainer: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'wrap',
    },
  },
  video: {
    height: '60vh',
  },
  textContainer: {
    textAlign: 'center',
    marginLeft:theme.spacing(8),
  },
  space:{
    paddingBottom: theme.spacing(4),
  },
  videos: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    height: '62vh',
  },
}));
const VideoSuggestion = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.videoboxContainer}>
      <Grid item className={classes.textContainer}>
        <Typography variant='h2' className={classes.space}>Vad känner du för?</Typography>
        <Typography variant='body1'>Lyssna till din kropp och känn efter vad du vill göra idag för att må bra.</Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={5} className={classes.videoboxContainer}>
        <Grid item xs={5} className={classes.video}>
          <VideoBox
            backgroundImage='https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            heading='COACH SAMTAL'
            description='soul manifistation samtal'
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

import { makeStyles } from '@material-ui/core';
import React from 'react';
import VideoContainer from './VideoContainer';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const VideoContainers = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
      {props.videos.map((video) => (
        <Grid item xs={8} md={4} key={video.id}>
          <VideoContainer
            img={video.image}
            heading={video.title}
            description={video.description}
            time={video.time}
            link={`/Video/${video.id}`}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoContainers;

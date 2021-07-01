import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, Box, Button } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margintop: '5vh',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      display:'block',
      // width: '100vw',
    },
  },
  textContainer: {
    height: '50%',
    display: 'flex',
    flexFlow: 'column',
    paddingLeft: theme.spacing(8),
  },
  videoContainer: {
    height: '100%',
    backgroundColor: '#238584',
  },
  video: {
    display:'flex',
    justifyContent:'center',
    paddingTop:'20%',

  },
}));

const VideoView = (props) => {
  const classes = useStyles();
  const [video, setVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const vid = props.videos.find((vid) => vid.id === id);
    setVideo(vid);
  }, []);

  return (
    <Grid container className={classes.container}>
      {video ? (
        <>
          <Grid item md={12} xs={6}  className={classes.textContainer}>
            <Grid item xs={11} className={classes.textBox}>
              <Typography variant='h2'>{video.title}</Typography>
              <Typography variant='h3'>Meditation</Typography>
            </Grid>
            <Grid item xs={8} className={classes.textBox}>
              <Typography variant='h3'>Beskrivning</Typography>
              <Typography variant='body1'>{video.description}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.btnBox}>
              <Button variant='contained' color='secondary' type='button'>
                Tillbaka
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6} md={12} className={classes.videoContainer}>
            <Grid item xs={12} className={classes.video}>
              <Video url={video.url} />
            </Grid>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};
export default VideoView;

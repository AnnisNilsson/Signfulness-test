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
    margintop: '50vh',
    paddingTop:'5vh',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column-reverse'
    },
  },
  textContainer: {
    height: '50%',
    display: 'flex',
    flexFlow: 'column',
    paddingLeft: theme.spacing(5),
   

  },
  textBoxOne:{
    [theme.breakpoints.down('sm')]:{
      paddingTop:theme.spacing(6),
      }
    },
    textBoxTwo:{
    paddingTop:theme.spacing(6),
  
  },
  videoContainer: {
    height: '100%',
    backgroundColor: '#238584',
    [theme.breakpoints.down('sm')]: {
      width:'100vw',
    }
  },
  video: {
    display:'flex',
    justifyContent:'center',
    paddingTop:'20%',
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(4),
    }
  },
  btnBox:{
    paddingTop:theme.spacing(3),

  }
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
          <Grid className={classes.textContainer}>
            <Grid item xs={11} className={classes.textBoxOne}>
              <Typography variant='h3'>Meditation</Typography>
              <Typography variant='h2'>{video.title}</Typography>
            </Grid>
            <Grid item xs={8} className={classes.textBoxTwo}>
              <Typography variant='h3'>Beskrivning</Typography>
              <Typography variant='body1'>{video.description}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.btnBox}>
              <Button variant='contained' color='secondary' type='button'>
                Tillbaka
              </Button>
            </Grid>
          </Grid>
          <Grid item className={classes.videoContainer}>
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
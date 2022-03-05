import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Rectangle from '../components/Rectangle';
import Triangle from '../components/Triangle';
import CategoryDescription from '../components/CategoryDescription';
import handwithplant from '../media/handwithplant.svg';
import VideoContainers from '../components/VideoCard/VideoContainers';
import isUserLoggedIn from '../services/authMethods';
import VideoContainer from '../components/VideoCard/VideoContainer';
import desert from '../media/desert.jpg';
import sky from '../media/himlen.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  containerSecond: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    justifyContent:'center',
    textAlign: '-webkit-center',
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(8),
  },
  videoContainers: {
    marginLeft: '5vw',
  },
  videoContainersSecond:{
    display:'flex',
    flexDirection:'column',
  }
}));

const Yoga = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.container}>
      <Rectangle top={'100vh'} />
      <Triangle top={'200vh'} />
      <Grid item xs={12}>
        <Typography variant='h1' className={classes.heading}>
          YOGA
        </Typography>
      </Grid>

{/* yoga yin */}
<Grid item  xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Yinyoga'
          description='Yinyoga är en återhämtande och terapeutisk yogastil som handlar om att stilla kropp och sinne. Det är en motvikt till yangbaserade, mer fysiskt krävande yogaformer.'
        />
      </Grid>

      <Grid item xs={12} className={classes.videoContainers}>
        <Grid container spacing={3} className={classes.containerSecond}>

          <Grid md={4} xs={12} >
            <VideoContainer
              img={desert}
              heading={'Meditations berättelse'}
              description={'en text om mycket mer'}
              time={'10:01'}
              link={'/VideoViewSamya2'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Lugnet är min källa'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/VideoViewSamya'}
            />
            </Grid>
          </Grid>
        </Grid>
  
    
    </Grid>
  );
};

export default Yoga;

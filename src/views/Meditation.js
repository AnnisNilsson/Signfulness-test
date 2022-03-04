import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import Rectangle from '../components/Rectangle';
import Triangle from '../components/Triangle';
import CategoryDescription from '../components/CategoryDescription';
import handwithplant from '../media/handwithplant.svg';
import VideoContainers from '../components/VideoCard/VideoContainers';
import isUserLoggedIn from '../services/authMethods';
import VideoContainer from '../components/VideoCard/VideoContainer';
import ocean from '../media/ocean.jpg'

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
    justifyContent:'center'
  },
  heading: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
  videoContainers: {
    marginLeft: '5vw',
  },
  videoContainersSecond:{
    display:'flex',
    flexDirection:'column',
  }
}));

const Meditation = (props) => {
  const classes = useStyles();

  if (!isUserLoggedIn()) return (null);

  return (
    <Grid container spacing={10} className={classes.container}>
      <Rectangle top={'100vh'} />
      <Triangle top={'200vh'} />
      <Grid item xs={12}>
        <Typography variant='h1' className={classes.heading}>
          MEDITATIONER
        </Typography>
      </Grid>
      <Grid item  xs={12}>
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

   {/* samyas meditationer */}

      <Grid item  xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Samya'
          description='Meditationer gjorda av Samya och översatta till teckenspråk av Rahima och Anna-Klara'
        />
      </Grid>

      <Grid item xs={12} className={classes.videoContainersSecond}>
        <Grid container spacing={3} className={classes.containerSecond}>

          <Grid md={4} xs={12} >
            <VideoContainer
              img={ocean}
              heading={'historien'}
              description={'en text om mycket mer'}
              time={'2:10'}
              link={'/VideoViewSamya2'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={ocean}
              heading={'historien'}
              description={'en text om mycket mer'}
              time={'2:10'}
              link={'/VideoViewSamya'}
            />
            </Grid>
          </Grid>
        </Grid>
   
{/* våra meditationer */}

<Grid item  xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Signfulness'
          description='Meditationer gjorda av Samya och översatta till teckenspråk av Rahima och Anna-Klara'
        />
   </Grid>

   <Grid item xs={12} className={classes.videoContainersSecond}>
        <Grid container spacing={3} className={classes.containerSecond}>

          <Grid md={4} xs={12} >
            <VideoContainer
              img={ocean}
              heading={'historien'}
              description={'en text om mycket mer'}
              time={'2:10'}
              link={'/VideoViewSamya2'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={ocean}
              heading={'historien'}
              description={'en text om mycket mer'}
              time={'2:10'}
              link={'/VideoViewSamya'}
            />
            </Grid>
          </Grid>
        </Grid>

    </Grid>




 

    
  );
};
export default Meditation;

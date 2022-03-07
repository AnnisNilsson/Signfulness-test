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
    textAlign: '-webkit-center',
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
          description='Natthiko var namnet Björn fick när han blev buddhistmunk i den thailändska skogstraditionen 1992. Här hittar du meditationer skapta av Björn översatta av Signfulness.'
        />
      </Grid>
      <Grid item xs={12} className={classes.container}>
        <VideoContainers videos={props.videos} />
      </Grid>

   {/* samyas meditationer */}

      <Grid item  xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Samya'
          description='Meditationer som är skapta av Samya på Loveit och som har översats till teckenspråk av Signfulness.'
        />
      </Grid>

      <Grid item xs={12} className={classes.videoContainersSecond}>
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
          </Grid>
        </Grid>
   
{/* våra meditationer */}

<Grid item xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Signfulness'
          description='Meditationer som vi på Signfulness har skapat och hoppas kunna ge dig kraft och hjälpa dig att hitta ett inre lugn.'
        />
   </Grid>

   <Grid item xs={12} className={classes.videoContainersSecond}>
        <Grid container spacing={3} className={classes.containerSecond}>

          <Grid md={4} xs={12} >
            <VideoContainer
              img={sky}
              heading={'En fridfull skogspromenad i ditt inre'}
              description={'en text om mycket mer'}
              time={'10:01'}
              link={'/VideoViewRahima'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={sky}
              heading={'Hitta närvaron genom andningen'}
              description={'en text om mycket mer'}
              time={'13:16'}
              link={'/VideoViewAnnis'}
            />
            </Grid>
          </Grid>
        </Grid>

    </Grid>




 

    
  );
};
export default Meditation;

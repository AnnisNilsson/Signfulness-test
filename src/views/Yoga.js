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
import ocean from '../media/yogaocean.jpg';

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
          description='Yinyoga är en återhämtande och terapeutisk yogastil som handlar om att stilla kropp och sinne. Det är en motvikt till yangbaserade, mer fysiskt krävande yogaformer. Varje video är en yogaposition. Se videorna och sätt ihop din egen yogasession utifrån vilka positioner som känns bra för din kropp.'
        />
      </Grid>

      <Grid item xs={12} className={classes.videoContainers}>
        <Grid container spacing={3} className={classes.containerSecond}>

          <Grid md={4} xs={12} >
            <VideoContainer
              img={desert}
              heading={'Ankelsträckning'}
              time={'3:00'}
              link={'/AnkleStrech'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Bananasana'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/Bananasana'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Caterpillar Pose'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/CaterpillarPose'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Katt som drar i svansen'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/CatPosition'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Barn positionen'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/BarnPositionen'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Dinglar'}
              description={'en text om mycket mer'}
              time={'15:42'}
              link={'/Dinglar'}
            />
            </Grid>
            <Grid md={4} xs={12} >
            <VideoContainer
              img={ocean}
              heading={'Snigel Position'}
              time={'2:04'}
              link={'/SnigelPosition'}
            />
            </Grid>
            <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Tå knäböj'}
              description={'en text om mycket mer'}
              time={'2:23'}
              link={'/ToePose'}
            />
            </Grid>
          </Grid>
        </Grid>
       
        <Grid item  className={classes.heading} spacing={3} xs={12}>
        <CategoryDescription
          color='rgb(114 156 155)'
          backgroundImage={`url(${handwithplant})`}
          heading='Yoga med Valeria'
          description='Valeria är utbildad inom yoga och andning och hon har flera års erfarenhet inom yoga.'
        />
      </Grid>

      <Grid item xs={12} className={classes.videoContainers}>
        <Grid container spacing={3} className={classes.containerSecond}>
      
      <Grid md={4} xs={12} >
              <VideoContainer
              img={desert}
              heading={'Kaulatantra yoga'}
              description={'en text om mycket mer'}
              time={'12:05'}
              link={'/KaulatantraYoga'}
            />
            </Grid>

          </Grid>
          </Grid>
          </Grid>
       
   
  );
};

export default Yoga;

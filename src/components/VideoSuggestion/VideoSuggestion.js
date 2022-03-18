import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import VideoBox from './VideoBox';
import { Link } from 'react-router-dom';
import ballong from '../../media/ballong.jpg';
import yoga from '../../media/Yoga-himlen.JPG';
import rahima from '../../media/rahima2.png';
import annis from '../../media/annis2.png';


const data = [
  {
    image:rahima,
    heading: 'YOGA',
    description: 'hitta din styrka',
    link:'Yoga'
  },
  {
    image:annis,
    heading: 'MEDITATION',
    description: 'hitta ditt inre lugn',
    link:'/Meditation'
  },
];

const useStyles = makeStyles((theme) => ({
  videoboxContainer: {
    paddingTop:'5vh',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexFlow: 'wrap-reverse',
    },
  },

  video: {
    height: '60vh',
    [theme.breakpoints.down('sm')]: {
      marginBottom:'10vh'
    },
  },
  textContainer: {
    textAlign: 'center',
    marginLeft:theme.spacing(3),
    width:'45%',
    [theme.breakpoints.down('sm')]: {
      display:'none'
    },
  },
    textContainerSm:{
      [theme.breakpoints.up('md')]: {
        display:'none',
        
     
      
    }
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
    [theme.breakpoints.down('sm')]: {
      height: '100vh',
      marginBottom:'10vh'
    },
  },
  linkStyle:{
    underline:'none',
    color:'black',
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));
const VideoSuggestion = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item className={classes.textContainerSm}>
        <Typography variant='h2' className={classes.space}>Kul att just du är här!</Typography>
        <Typography variant='body1' className={classes.space}>Lyssna till din kropp och känn efter vad du vill göra idag för att må bra. Ge kroppen lite rörelse och lösa upp knutar genom yoga eller hitta stillhet och svaren i ditt inre genom meditation. Om du har några funderingar hör av dig till oss så ska vi försöka hjälpa dig!</Typography>
      </Grid>
    <Grid container spacing={3} className={classes.videoboxContainer}>
      <Grid item className={classes.textContainer}>
        <Typography variant='h2' className={classes.space}>Kul att just du är här!</Typography>
        <Typography variant='body1'>Lyssna till din kropp och känn efter vad du vill göra idag för att må bra. Ge kroppen lite rörelse och lösa upp knutar genom yoga eller hitta stillhet och svaren i ditt inre genom meditation. Om du har några funderingar hör av dig till oss så ska vi försöka hjälpa dig!
</Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={5} className={classes.videoboxContainer}>
        <Grid item xs={12} md={5} className={classes.video}>
        {/* <Link to='/Kontakt' className={classes.linkStyle}> */}
          <VideoBox
            backgroundImage={ballong}
            heading='COACH SAMTAL'
            description='soul manifestation'
            link='/Kontakt'
          />
          {/* </Link> */}
        </Grid>
        <Grid item xs={12} md={5} className={classes.videos}>
          {data.map((data) => {
            return (
              <VideoBox
                key={data.image}
                backgroundImage={data.image}
                heading={data.heading}
                description={data.description}
                marginBottom={30}
                link={data.link}
              />
            );
          })}
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Grid>
    </Grid>
  );
};

export default VideoSuggestion;

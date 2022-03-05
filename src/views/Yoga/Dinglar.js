import React, { useEffect, useState } from 'react';
import { Grid, Typography, makeStyles, Box, Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Video from '../../components/Video';

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

const Dinglar = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.container}>
          <Grid className={classes.textContainer}>
            <Grid item xs={11} className={classes.textBoxOne}>
              <Typography variant='h3'>Yoga</Typography>
              <Typography variant='h2'>{'Dinglar'}</Typography>
            </Grid>
            <Grid item xs={8} className={classes.textBoxTwo}>
              <Typography variant='h3'>Beskrivning</Typography>
              <Typography variant='body1'>{'Föreslagen hålltid för denna ställning är 2-3 minuter. Fördelar med dinglande pose är att det dekomprimerar ryggraden, axlarna och magen vilket kan hjälpa till med matsmältningen. Undvika denna pose om du har högt blodtryck, poser där huvudet är under hjärtat kan öka blodtrycket. Lågt blodtryck kan orsaka yrsel. När du kommer ut ur denna ställning, rulla upp långsamt för att undvika att känna dig yr eller alternativt komma ur denna ställning genom att gå ner i en knäböj. Om du har dålig rygg kan det hjälpa att böja knäna mycket i denna position. Steg innan du går in i Dangling.'}</Typography>
            </Grid>
            <Grid item xs={4} className={classes.btnBox}>
            <Link to='/yoga'>
              <Button variant='contained' color='secondary' type='button'>
                Tillbaka
              </Button>
              </Link>
            </Grid>
          </Grid>
          <Grid item className={classes.videoContainer}>
            <Grid item xs={12} className={classes.video}>
              <Video url={'https://www.youtube.com/watch?v=cZp1_--DyHQ&t=1s'} />
            </Grid>
          </Grid>
       
      
    </Grid>
  );
};
export default Dinglar;

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

const Bananasana = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.container}>
          <Grid className={classes.textContainer}>
            <Grid item xs={11} className={classes.textBoxOne}>
              <Typography variant='h3'>Yoga</Typography>
              <Typography variant='h2'>{'Bananasana'}</Typography>
            </Grid>
            <Grid item xs={8} className={classes.textBoxTwo}>
              <Typography variant='h3'>Beskrivning</Typography>
              <Typography variant='body1'>{'Föreslagen hålltid är 3-5 minuter. Meridianer som påverkas av denna ställning är lever och gallblåsa. Fördelar med Bananasana är att det sträcker ut hela sidan av kroppen och arbetar med ryggraden i en sidoböjning från låret ända upp till bröstkorgen. Kontraindikationer för denna ställning, om dina händer eller armar pirrar, försök att ta ner händerna vid dina sidor.'}</Typography>
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
export default Bananasana;

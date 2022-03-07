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

const AnkleStretch = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.container}>
          <Grid className={classes.textContainer}>
            <Grid item xs={11} className={classes.textBoxOne}>
              <Typography variant='h3'>Yoga</Typography>
              <Typography variant='h2'>{'Ankelsträckning'}</Typography>
            </Grid>
            <Grid item xs={8} className={classes.textBoxTwo}>
              <Typography variant='h3'>Beskrivning</Typography>
              <Typography variant='body1'>{'Rekommenderad hålltid är 1 - 3 minuter. Meridianer som påverkas av ankel stretch är magen, mjälten, levern och gallblåsan. Fördelarna med ankel stretch att det sträcker anklarna och toppen av fötterna. Gå med försiktighet in i denna stretch om dina hälar, vrister eller knän är obekväma eller om det finns någon smärta, prova en variation eller hoppa över dessa poser helt.'}</Typography>
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
              <Video url={'https://www.youtube.com/watch?v=aySL73F_opk&t=52s'} />
            </Grid>
          </Grid>
       
      
    </Grid>
  );
};
export default AnkleStretch;

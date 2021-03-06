import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: '#689E9E',
    // height: '40vh',
    position: 'relative',
    zIndex: 0,
    marginBottom: theme.spacing(12),
  },
  box: {
    height: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent:'center'
     
    },
  },
  textBox: {
    height: '50%',
    // color: '#FFFFFF',
    flexFlow: 'column',
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      marginLeft:'30%'
    },
 
  },
  // whiteBox: {
  //   position: 'absolute',
  //   backgroundColor: '#FFFFFF',
  //   top: 60,
  //   left: 50,
  //   height: '85%',
  //   width: '45%',
  //   zIndex: 1,
  //   [theme.breakpoints.down('sm')]: {
  //     display: 'none',
  //   },
  // },
  imageBox: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
    // width: '50vw',
    zIndex: 2,
    position: 'relative',
    top: 80,
    left: -70,
       [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
const Header = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={7} className={classes.box}>
        <Grid item xs={8}>
          <img
            className={classes.imageBox}
            src={props.img}
            alt='Woman meditating'
          />
        </Grid>
        {/* <Grid item xs={8} className={classes.whiteBox} /> */}
      </Grid>
      <Grid item xs={4} className={[classes.box, classes.textBox]}>
        <div>
          <Typography variant='h1'>{props.heading}</Typography>
          <Typography variant='h2'>{props.name}</Typography>
        </div>
        <Typography variant='body1' color='textPrimary'>
Ta tid bara för dig för att må bra, det förtjänar du!        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;

import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ThankYouBoxLeft from '../components/ThankYouBoxLeft';
import ThankYouBoxRight from '../components/ThankyouBoxRight';
import ak from '../media/annis.png';
import arrow from '../media/arrow.png';
import rh from '../media/rahima.png';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  textpadding:{
    padding:20
  },
  textBox: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  imgContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column'
    },
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '45vh',
  },
  textBoxColor: {
    backgroundColor: '#E0CAC2',
    padding: '10vh 0 10vh 0',
    textAlign: 'center',
    width: '100%',
    minHeight: 300,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}));

const OmOss = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={10} className={classes.container}>
      <Grid item xs={12} className={[classes.imgContainer, classes.textBox]}>
        <img src={rh} alt='rh' className={classes.img}></img>
        <img src={arrow} alt='pil' className={classes.img}></img>
        <img src={ak} alt='ak' className={classes.img}></img>
      </Grid>

      <Grid item xs={12} className={classes.textBox}>
        <Typography variant='h2'>Vilka är vi?</Typography>
        <Typography variant='body1' className={classes.textpadding}>
          Lorem ipsum dolores sitamet, Lorem ipsum dolores sitametLorem ipsum
          dolores sitametLorem ipsum dolores sitametLorem ipsum dolores
          sitametLorem ipsum dolores sitamet
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.textBoxColor}>
        <Typography variant='h3'>
          Vi vill tacka alla som hjälpt oss på vägen!
        </Typography>
        <Typography variant='body1' className={classes.textpadding}>
          Lorem ipsum dolores sitamet, Lorem ipsum dolores sitametLorem ipsum
          dolores sitametLorem ipsum dolores sitametLorem ipsum dolores
          sitametLorem ipsum dolores sitamet
        </Typography>
      </Grid>

      <ThankYouBoxLeft
        img={
          'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        Name='Name'
        Text='lorem ipsum doloers paser lfkvnf hrk hrdå rtsgste'
      />
      <ThankYouBoxRight
        Name='Name'
        Text='lorem ipsum doloers paser lfkvnf hrk hrdå rtsgste'
        img={
          'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      />
    </Grid>
  );
};

export default OmOss;

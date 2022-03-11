import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: '10px 13px 20px rgba(0, 0, 0, 0.25);',
    height: '50vh',
    minWidth: '30vw',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '20vh',
    padding: 200,
    margin: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: '10vh',
    },
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
  },
  textContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    fontSize: '20pt',
  },
  box: {
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  bold: {
    fontWeight: 700,
  },
  contactInfo: {
    padding: 20,
  },
}));

const ContactCard = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container} md={5}>
      <Grid className={classes.box}>
        <img
          className={classes.img}
          src={props.img}
          alt={props.alt}
        ></img>

        <Grid item className={classes.textContainer}>
          <Typography className={classes.name} variant='h4'>
            {props.name}
          </Typography>
          <Typography variant='body1'>{props.description}</Typography>
        </Grid>
        <Grid className={classes.contactInfo}>
          <Typography variant='body1'>
            <span className={classes.bold}>Mail:</span> {props.mail}
          </Typography>
          {/* <Typography variant='body1'>
            <span className={classes.bold}>Number:</span> {props.number}{' '}
          </Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactCard;

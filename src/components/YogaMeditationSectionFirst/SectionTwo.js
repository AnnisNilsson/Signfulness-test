import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    width: '100vw',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
  },
  boxTwo: {
    backgroundColor: (props) => props.backgroundColor,
    color: '#515151',
    margin: '10vh 0 10vh 0',
    padding: '4vh',
  },
  heading: {
    marginBottom: theme.spacing(5),
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '35vh',
    padding: '3vh',
  },
  textBox: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
}));

const SectionTwo = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container className={[classes.box, classes.boxTwo]}>
      <Grid item xs={8} md={4} className={classes.textBox}>
        <Typography variant='h2' className={classes.heading}>
          {props.title}
        </Typography>
        <Typography variant='body1' className={classes.text}>
          {props.description}
        </Typography>
      </Grid>
      <Grid item xs={8} md={4}>
        <img src={props.img} alt={props.imgAlt} className={classes.img}></img>
      </Grid>
    </Grid>
  );
};

SectionTwo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};
export default SectionTwo;

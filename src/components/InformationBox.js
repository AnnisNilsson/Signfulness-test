import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 500,
    display: 'flex',
    flexFlow: (props) => `${props.flexDirection} nowrap`,
    width: '100vw',
  },
  box1: {
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.textColor,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '100%',
  },
  innerBox: {
    textAlign: 'center',
    maxHeight: '60%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
  },
  box2: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));
const InformationBox = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item md={6} xs={12} className={classes.box1}>
        <Grid item xs={10} className={classes.innerBox}>
          <Typography variant='h5'>{props.heading}</Typography>
          <Typography variant='body1'>{props.text}</Typography>
          <Typography variant='subtitle1'>{props.link}</Typography>
        </Grid>
      </Grid>
      <Grid item md={6} xs={12} className={classes.box2}></Grid>
    </Grid>
  );
};
InformationBox.propTypes = {
  flexDirection: PropTypes.oneOf(['row', 'row-reverse']).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default InformationBox;

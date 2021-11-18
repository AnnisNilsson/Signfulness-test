import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 500,
    display: 'flex',
    width: '100vw',
    flexFlow: (props) => `${props.flexDirection} nowrap`,
    [theme.breakpoints.down('sm')]: {
      display:'grid',
      height:'80vh'
    },
  },
  box1: {
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.textColor,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    minHeight: '100%',
    [theme.breakpoints.down('sm')]: {
      height:'fit-content',
    },
  },
  innerBox: {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding:20
    },
  },
  box2: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      height:'40vh',
    },
  },
}));
const InformationBox = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={12} md={12} className={classes.box1}>
        <Grid item xs={10} className={classes.innerBox}>
          <Typography variant='h5'>{props.heading}</Typography>
          <Typography variant='body1'>{props.text}</Typography>
          <Link to={props.link}>{props.linkText}</Link>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}  className={classes.box2}></Grid>
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

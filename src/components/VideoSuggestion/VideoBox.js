import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: theme.spacing(2),
    marginBottom: (props) => props.marginBottom,
  },
  textContainer: {
    backgroundColor: '#F4F4F4',
    borderRadius: theme.spacing(2),
    bottom: theme.spacing(11),
    textAlign: 'center',
    opacity: 0.9,
    boxSizing: 'content-box',
    margin: 'auto auto -40px auto',
    boxShadow: '10px 14px 24px rgba(0, 0, 0, 0.25)',
    padding: theme.spacing(1),
  },
  linkStyle:{
    underline:'none',
    color:'black',
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));

const VideoBox = (props) => {
  const classes = useStyles(props);
  return (
    <Grid container className={classes.container}>
      <Grid item xs={10} className={classes.textContainer}>
      <Link to={props.link} className={classes.linkStyle}>
        <Typography variant='h6'>{props.heading}</Typography>
        <Typography variant='body1'>{props.description}</Typography>
    </Link>
      </Grid>
    </Grid>
  );
};

VideoBox.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  marginBottom: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default VideoBox;

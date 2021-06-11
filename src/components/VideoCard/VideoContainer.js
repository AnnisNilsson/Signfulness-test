import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#F4F4F4',
    boxShadow: '10px 13px 20px rgba(0, 0, 0, 0.25);',
    borderRadius: 10,
    margin: 0,
    padding: 0,
    display: 'flex',
    flexFlow: 'column wrap',
    margin: 10,
    width: '80%',
  },
  imageContainer: {
    backgroundPosition: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    minHeight: '100px',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '20px 10px 20px 10px',

    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  img: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    borderRadius: '10px 10px 0 0',
  },
}));
const VideoContainer = (props) => {
  const classes = useStyles(props);
  return (
    <Grid
      container
      className={classes.container}
      onClick={() => {
        props.history.push(props.link);
      }}
    >
      <Grid item xs={12} sm={12} md={12} className={classes.imageContainer}>
        <img src={props.img} className={classes.img} alt={props.imgAlt} />
        <Grid item xs={12} md={12} className={classes.textContainer}>
          <Typography variant='h6'>{props.heading}</Typography>
          {/*           <Typography variant='body1'>{props.description}</Typography> */}
          <Typography variant='body2'>{props.time}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

VideoContainer.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default withRouter(VideoContainer);

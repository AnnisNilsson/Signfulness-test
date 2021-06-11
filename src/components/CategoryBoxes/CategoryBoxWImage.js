import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: (props) => props.backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 17,
    minHeight: 400,
  },
  overlay: {
    height: 'inherit',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2),
    margin: 0,
    borderRadius: 17,
    backgroundColor: (props) => props.backgroundColor,
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
  },
}));

const CategoryBoxWImage = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.overlay}>
        <Typography variant='h1' className={classes.text}>
          {props.heading}
        </Typography>
      </Grid>
    </Grid>
  );
};
CategoryBoxWImage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
export default CategoryBoxWImage;

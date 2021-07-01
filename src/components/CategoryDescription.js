import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorBlock: {
    height: '100%',
    backgroundColor: (props) => props.color,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    padding: theme.spacing(2),

  },
  iconBlock: {
    height: '20vh',
    backgroundImage: (props) => props.backgroundImage,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  text: {
    paddingLeft: 20,
  },
}));

const CategoryDescription = (props) => {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={10} md={8} className={classes.colorBlock}>
        <Grid item xs={6}>
          <Typography
            variant='h5'
            color='textPrimary'
            className={classes.heading}
          >
            {props.heading || 'Category'}
          </Typography>
          <Typography
            variant='body1'
            color='textPrimary'
            className={classes.text}
          >
            {props.description || 'Lorem ipsum dolor set amet'}
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.iconBlock} />
      </Grid>
    </Grid>
  );
};

export default CategoryDescription;

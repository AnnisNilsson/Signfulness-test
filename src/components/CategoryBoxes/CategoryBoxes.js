import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CategoryBoxWImage from './CategoryBoxWImage';

const categories = [
  {
    text: 'Yoga',
    color: 'rgba(237, 206, 194, 0.7)',
    image:
      "url('https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80')",
  },
  {
    text: 'Meditation',
    color: 'rgba(54, 138, 137, 0.7)',
    image:
      "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80')",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}));

const CategoryBoxes = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
      {categories.map((category) => {
        return (
          <Grid item xs={5} key={category.image}>
            <CategoryBoxWImage
              backgroundImage={category.image}
              backgroundColor={category.color}
              heading={category.text}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default CategoryBoxes;

import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  rectangle: {
    width: '101vw',
    height: '18vh',
    backgroundColor: '#D9BAAF',
    zIndex: -2,
    position: 'absolute',
  },
}));

const Rectangle = (props) => {
  const classes = useStyles();
  return <Box top={props.top} className={classes.rectangle}></Box>;
};
Rectangle.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default Rectangle;

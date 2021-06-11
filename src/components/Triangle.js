import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  arrowUp: {
    width: 0,
    height: 0,
    borderLeft: '50vw solid transparent',
    borderRight: '50vw solid transparent',
    borderBottom: '40vh solid #E7E7E7',
    position: 'absolute',
    zIndex: -2,
  },
}));

const Triangle = (props) => {
  const classes = useStyles();
  return (
    <Box
      top={props.top}
      bottom={props.bottom}
      className={classes.arrowUp}
    ></Box>
  );
};

Triangle.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default Triangle;

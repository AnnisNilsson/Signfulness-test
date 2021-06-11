import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

const Video = (props) => {
  return (
    <Grid container>
      <ReactPlayer url={props.url} controls={true} />
    </Grid>
  );
};

Video.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Video;

import React, {useState} from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    readmore: {
        color:'#004c4b',
    },
    link:{
        textAlign:'center',
        cursor:'pointer'
    }
}));


const Readmore = (props) => {
    const classes = useStyles(props);
    const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">{props.readMore}</p>
  </div>
  const linkName=readMore?'Läs mindre ↞ ':'Läs mer  ➳ '
  return (
    <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
                <Typography variant='body1'>{readMore && extraContent}</Typography>                
            <a className="readmore" onClick={()=>{setReadMore(!readMore)}}><Typography variant='h6' className={classes.link}>{linkName}</Typography></a>
      </Grid>
    </Grid>
  );
}

    export default Readmore;
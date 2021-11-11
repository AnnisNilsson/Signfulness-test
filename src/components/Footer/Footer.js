import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import instagram from '../../media/instagram.png';

const useStyles = makeStyles((theme) => ({
  footers: {
    background: '#f4f1ec',
    width: '100%',
    paddingTop: '15px',
    marginTop: '150px',
  },
  gridContainer: {
    display: 'flex',

  },
  imageBox: {
      width: '5vh',
      marginRight:'20px'
    },
    boxOne:{
        display:'flex',
        fontSize:'15pt',
        padding:'10px',
        paddingLeft:'50px'

       
    },
    boxTwo:{
        display:'flex',
        alignSelf: 'flex-end',
        justifyContent:'center',
        textAlign: 'center',
        background: '#919191',
        width:'100%',
        padding:'15px',
    }
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footers}>
      <Grid className={classes.gridContainer}>
        <div className={classes.boxOne}>
            <a href="https://www.instagram.com/signfulness/">
          <img
            src={instagram}
            className={classes.imageBox}
            alt="instagram"
          ></img>
          <Typography className={classes.textName} variant="p" color="textPrimary">
            Signfulness
          </Typography>
          </a>
        </div>
      </Grid>
        <div className={classes.boxTwo}>
          <Typography  variant="p" color="textPrimary">
            © 2021 Signfulness
          </Typography>
        </div>
    </Grid>
  );
};

export default Footer;

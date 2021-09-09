import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import SpaIcon from '@material-ui/icons/Spa';
import PropTypes from 'prop-types';
import logga from '../../media/logga.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F6F6F6',
    height: '9vh',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    boxShadow: '4px 11px 19px -1px rgba(178,178,178,0.58)',
    webkiBoxShadow:' 4px 11px 19px -1px rgba(178,178,178,0.58)', 
  },
  navIconBox:{
    paddingLeft:'4vw'
  },
  logga:{
    height:'10vh'
  },
  icon: {
    color: '#238584',
    marginLeft: theme.spacing(2),
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: theme.spacing(4),
  },
  btn: {
    color: 'white',
  },
  link: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const NavbarDesktop = (props) => {
  const classes = useStyles();

  const signOut = async () => {
    await props.onSignout;
    props.history.push('/');
  };

  return (
    <Grid container className={classes.container}>
      <Grid item md={2} className={classes.navIconBox}>
        <Link to='/'>
          <img src={logga} alt='signfulness' className={classes.logga}></img>
          {/* <SpaIcon className={classes.icon} /> */}
        </Link>
      </Grid>
      <Grid item md={8} className={classes.linkContainer}>
        {props.links.map((link) => {
          return (
            <Typography
              variant='body1'
              color='textPrimary'
              key={link.title}
              onClick={() => props.history.push(link.link)}
              className={classes.link}
            >
              {link.title}
            </Typography>
          );
        })}
        {props.isLoggedIn ? (
          <Button
            type='button'
            variant='contained'
            color='primary'
            size='small'
            className={classes.btn}
            onClick={props.onSignout}
          >
            Logga ut
          </Button>
        ) : (
          <Button
            type='button'
            variant='contained'
            color='primary'
            size='small'
            className={classes.btn}
            onClick={() => props.history.push('/Login')}
          >
            Logga in
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

NavbarDesktop.propTypes = {
  links: PropTypes.shape([]).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onSignout: PropTypes.func.isRequired,
};
export default withRouter(NavbarDesktop);

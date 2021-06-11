import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import SpaIcon from '@material-ui/icons/Spa';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F6F6F6',
    height: '5vh',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
      <Grid item md={2}>
        <Link to='/'>
          <SpaIcon className={classes.icon} />
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

import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
  AppBar,
  List,
  ListItem,
  Typography,
  Button,
  makeStyles,
  Grid,
  Drawer,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SpaIcon from '@material-ui/icons/Spa';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F6F6F6',
    height: '5vh',
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    marginBottom: theme.spacing(2),
    marginTop: 'auto',
    alignSelf: 'center',
  },
  drawer: {
    padding: theme.spacing(2),
    height: 'inherit',
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
}));

const NavbarMobile = (props) => {
  const [drawer, setDrawer] = useState(false);
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.container}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Link to='/'>
            <SpaIcon color='primary' />
          </Link>
          <MenuIcon color='primary' onClick={() => setDrawer(true)} />
        </Grid>
      </AppBar>
      <Drawer open={drawer} anchor='right' onClose={() => setDrawer(false)}>
        <div
          tabIndex={0}
          role='button'
          onClick={() => setDrawer(false)}
          onKeyDown={() => setDrawer(false)}
          className={classes.drawer}
        >
          <IconButton>
            <CloseIcon color='primary' />
          </IconButton>
          <List>
            {props.links.map((link) => {
              return (
                <ListItem
                  button
                  divider
                  key={link.title}
                  onClick={() => props.history.push(link.link)}
                >
                  <Typography variant='subtitle1' color='textPrimary'>
                    {link.title}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
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
            <Link to='/Login'>
              <Button
                type='button'
                variant='contained'
                color='primary'
                size='small'
                className={classes.btn}
              >
                Logga in
              </Button>
            </Link>
          )}
        </div>
      </Drawer>
    </>
  );
};

NavbarMobile.propTypes = {
  links: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  onSignout: PropTypes.func.isRequired,
};

export default withRouter(NavbarMobile);
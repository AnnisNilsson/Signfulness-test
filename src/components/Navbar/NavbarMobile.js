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
import logga from '../../media/logga.png';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#F6F6F6',
    height: '8vh',
    position: 'fixed',
    top: 0,
    zIndex: 1100,
    boxShadow: '4px 11px 19px -1px rgba(178,178,178,0.58)',
    webkiBoxShadow:' 4px 11px 19px -1px rgba(178,178,178,0.58)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
 Gridcontainer:{
  paddingLeft:'6vw',
  paddingRight:'6vw'

  },
  logga:{
    height:'9vh'
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
        className={classes.Gridcontainer}
          container
          direction='row'
          justify='space-between'
          alignItems='center'
        >
          <Link to='/'>
          <img src={logga} alt='signfulness' className={classes.logga}></img>
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

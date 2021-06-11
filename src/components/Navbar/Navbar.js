import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';
import PropTypes from 'prop-types';

const navLinksUser = [
  {
    title: 'Yoga',
    link: '/Yoga',
  },
  {
    title: 'Meditation',
    link: '/Meditation',
  },
  {
    title: 'Inställningar',
    link: '/Installningar',
  },
  {
    title: 'Kontakt',
    link: '/Kontakt',
  },
];

const navLinksNoUser = [
  {
    title: 'Yoga/Meditation',
    link: '/Yoga_Meditation',
  },
  {
    title: 'Inspiration',
    link: '/Inspiration',
  },
  {
    title: 'Om oss',
    link: '/OmOss',
  },
];

const Navbar = (props) => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if ('token' in localStorage) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setMobileScreen(true);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 900) {
        setMobileScreen(true);
      } else {
        setMobileScreen(false);
      }
    });
  }, []);

  return (
    <Grid container>
      {mobileScreen ? (
        <NavbarMobile
          isLoggedIn={isLoggedIn}
          links={isLoggedIn ? navLinksUser : navLinksNoUser}
          onSignout={props.onSignout}
        />
      ) : (
        <NavbarDesktop
          isLoggedIn={isLoggedIn}
          links={isLoggedIn ? navLinksUser : navLinksNoUser}
          onSignout={props.onSignout}
        />
      )}
    </Grid>
  );
};
Navbar.propTypes = {
  onSignout: PropTypes.func.isRequired,
};
export default Navbar;

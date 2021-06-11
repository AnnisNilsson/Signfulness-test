import React, { useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Login from '../components/Forms/Login';
import ForgotPassword from '../components/Forms/ForgotPassword';
import CreateAccount from '../components/Forms/CreateAccount';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=674&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glas: {
    maxHeight: '80%',
    minWidth: '80%',
    background: 'rgba(255, 255, 255, 0.75)',
    height: '80vh',
    borderColor: '#ffff',
    boxShadow: '20px 4px 24px rgba(47, 47, 47, 0.28)',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const LoginViews = () => {
  const [forms, setForms] = useState({
    login: true,
    create: false,
    forgot: false,
  });
  const classes = useStyles();

  const changeForm = (form) => {
    if (form === 'login') {
      setForms({ login: true, create: false, forgot: false });
    } else if (form === 'create') {
      setForms({ login: false, create: true, forgot: false });
    } else if (form === 'forgot') {
      setForms({ login: false, create: false, forgot: true });
    }
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={10} className={classes.glas}>
        <Grid item xs={10} className={classes.form}>
          {forms.login ? <Login onChangeform={changeForm} /> : null}
          {forms.create ? <CreateAccount onChangeForm={changeForm} /> : null}
          {forms.forgot ? <ForgotPassword onChangeForm={changeForm} /> : null}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LoginViews;

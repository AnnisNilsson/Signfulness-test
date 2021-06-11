import React, { useContext } from 'react';
import {
  Grid,
  Button,
  TextField,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { firebaseAuth } from '../../providers/AuthProvider';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btns: {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnSpace: {
    marginRight: theme.spacing(2),
  },
}));
const Login = (props) => {
  const { handleSignin, inputs, setInputs } = useContext(firebaseAuth);

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignin();
    props.history.push('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant='h1' color='primary'>
            Logga in
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='E-mail'
            type='text'
            name='email'
            value={inputs.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            label='Lösenord'
            type='password'
            name='password'
            value={inputs.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} className={classes.btns}>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.btnSpace}
          >
            Logga in
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='button'
            onClick={() => props.onChangeform('create')}
          >
            Skapa konto
          </Button>
        </Grid>
        <Button type='button' onClick={() => props.onChangeform('forgot')}>
          Glömt lösenord?
        </Button>
      </Grid>
    </form>
  );
};

Login.propTypes = {};
export default withRouter(Login);

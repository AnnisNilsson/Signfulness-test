import React, { useContext, useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { firebaseAuth } from '../../providers/AuthProvider';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',
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

const CreateAccount = (props) => {
  const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);
  const classes = useStyles();
  const [confirmedPass, setConfirmedPass] = useState('');
  const minLength = 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'confirmedPassword') {
      setConfirmedPass(value);
    } else {
      setInputs((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSignup();
    props.history.push('/');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant='h4' color='primary'>
            Skapa konto
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            color='primary'
            id='email'
            name='email'
            label='E-mail'
            type='text'
            value={inputs.email}
            onChange={handleChange}
            helperText='Ex: name@email.com'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            color='primary'
            id='password'
            name='password'
            label='Password'
            type='password'
            value={inputs.password}
            error={inputs.password.length < minLength}
            onChange={handleChange}
            helperText='Minimum 6 characters'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant='outlined'
            color='primary'
            id='confirmedPassword'
            name='confirmedPassword'
            label='Confirm Password'
            type='password'
            value={confirmedPass}
            onChange={handleChange}
            error={inputs.password !== confirmedPass}
            helperText='Confirm your password'
          />
        </Grid>
        <Grid item xs={12} className={classes.btns}>
          <Button
            color='primary'
            variant='contained'
            type='submit'
            className={classes.btnSpace}
          >
            Skapa
          </Button>
          <Button
            color='secondary'
            variant='contained'
            onClick={() => props.onChangeForm('login')}
          >
            Tillbaka
          </Button>
        </Grid>
        <Grid item xs={12}>
          {errors.length > 0
            ? errors.map((error) => <p style={{ color: 'red' }}>{error}</p>)
            : null}
        </Grid>
      </Grid>
    </form>
  );
};

CreateAccount.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
};

export default withRouter(CreateAccount);

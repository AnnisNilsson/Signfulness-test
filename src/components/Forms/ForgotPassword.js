import React, { useContext } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { firebaseAuth } from '../../providers/AuthProvider';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
const ForgotPassword = (props) => {
  const { handleResetPassword, inputs, setInputs, errors } =
    useContext(firebaseAuth);
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleResetPassword();
    props.onChangeForm('login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant='h4' color='primary'>
            Glömt lösenord
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
            required
            value={inputs.email}
            onChange={handleChange}
            helperText='Ex: name@email.com'
          />
        </Grid>
        <Grid item xs={12} className={classes.btns}>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.btnSpace}
          >
            Skicka
          </Button>
          <Button
            variant='contained'
            type='button'
            color='secondary'
            onClick={() => props.onChangeForm('login')}
          >
            Tillbaka
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

ForgotPassword.propTypes = {
  onChangeForm: PropTypes.func.isRequired,
};
export default ForgotPassword;

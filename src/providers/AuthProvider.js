import React, { useState } from 'react';
import { authMethods } from '../services/authMethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const handleSignup = () => {
    authMethods.signup(inputs.email, inputs.password, setErrors, setToken);
  };
  const handleSignin = () => {
    authMethods.signin(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignout = () => {
    authMethods.signout(setErrors, setToken);
    console.log(errors, token);
  };

  const handleResetPassword = () => {
    authMethods.resetPassword(inputs.email);
    console.log(errors);
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup,
        handleSignin,
        handleSignout,
        handleResetPassword,
        inputs,
        setInputs,
        errors,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;

import firebaseConfig from './firebase';
import firebase from 'firebase';

let isLoggedIn = false;

firebase
  .auth()
  .onAuthStateChanged((user) => {
    isLoggedIn = (user != null);
    console.log("isLoggedIn: " + isLoggedIn);
  });

  export default function isUserLoggedIn() {
    return isLoggedIn;
  }

export const authMethods = {
  signup: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        setToken(window.localStorage.token);
        return true;
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        return false;
      });
  },
  signin: (email, password, setErrors, setToken) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        setToken(window.localStorage.token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        console.log(err);
      });
  },
  signout: (setErrors, setToken) => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        localStorage.removeItem('token');
        setToken(null);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        localStorage.removeItem('token');
        setToken(null);
        console.error(err.message);
      });
  },
  resetPassword: (email) => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

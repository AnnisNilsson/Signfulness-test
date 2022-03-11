import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import ContactCard from '../components/ContactCard';
import rahima from '../media/rahima2.png';
import annis from '../media/annis2.png';
import Footer from '../components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const KontaktaOss = (props) => {
  const classes = useStyles();
  return (
    <Grid container md={12}>
      <Typography variant='h2'>Kontakta oss</Typography>
      <Grid item className={classes.box}>
        <ContactCard
        img={rahima}
          mail='signsformind@gmail.com'
          name='Rahima Asadova'
          description='Soul manifistation coach'
        />
        <ContactCard
        img={annis}
          mail='signsformind@gmail.com'
          name='Anna-Klara Vifell'
          description='Soul manifistation coach'
        />
      </Grid>
      <Footer/>
    </Grid>
  );
};

export default KontaktaOss;

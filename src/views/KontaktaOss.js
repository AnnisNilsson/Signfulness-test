import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import ContactCard from '../components/ContactCard';
import rahima from '../media/rahima2.png';
import annis from '../media/annis2.png';

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
          mail='rahima@htomail.com'
          number='0735 0484 373'
          name='Rahima Asadova'
          description='beskrivning'
        />
        <ContactCard
        img={annis}
          mail='rahima@htomail.com'
          number='0735 0484 373'
          name='Anna-Klara Vifell'
          description='beskrivning'
        />
      </Grid>
    </Grid>
  );
};

export default KontaktaOss;

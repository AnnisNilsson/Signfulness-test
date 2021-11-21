import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ThankYouBoxLeft from '../components/ThankYouBoxLeft';
import ThankYouBoxRight from '../components/ThankyouBoxRight';
import ak from '../media/annis.png';
import arrow from '../media/arrow.png';
import rh from '../media/rahima.png';
import Footer from '../components/Footer/Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  textpadding: {
    padding: '5vh',
  },
  textBox: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  imgContainer: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  img: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '45vh',
  },
  textBoxColor: {
    backgroundColor: '#E0CAC2',
    padding: '10vh 0 10vh 0',
    textAlign: 'center',
    width: '100%',
    minHeight: 300,
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
}));

const OmOss = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={10} className={classes.container}>
      <Grid item xs={12} className={[classes.imgContainer, classes.textBox]}>
        <img src={rh} alt="rh" className={classes.img}></img>
        <img src={arrow} alt="pil" className={classes.img}></img>
        <img src={ak} alt="ak" className={classes.img}></img>
      </Grid>

      <Grid item xs={12} className={classes.textBox}>
        <Typography variant="h2">Vilka är vi?</Typography>
        <Typography variant="body1" className={classes.textpadding}>
          Vi heter Rahima och Anna-Klara och är riktiga yoga älskare. Vi har
          yogat i många år och håller på att utbilda oss till yogalärare. En
          utbildning som ger enormt mycket, även på det personliga planet. Vi
          går även en utbildning inom Soul manifestation coachning som håller på
          i två år och vi är klara hösten 2022. Rahima blev även färdigutbildad
          barnyogalärare 2017. Dessa utbildningar har öppnat våra ögon och gett
          oss nya perspektiv i livet. Genom detta har vi lärt oss saker på ett
          djupare plan varje dag – hela tiden utvecklar vi och skapar nya tankar
          om t.ex. vem vi är och vad vårt syfte är. Detta vill vi mer än gärna
          dela med er då vi känner att det har hjälpt oss så mycket.
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.textBoxColor}>
        <Typography variant="h3">
        Varför vi startat Signfulness
        </Typography>
        <Typography variant="body1" className={classes.textpadding}>
        Varför vi startat Signfulness och hur vi kom på idén – vi insåg att det
          idag inte finns någon teckenspråkig yoga eller meditations- app/ hemsida
          som gör att man kan yoga/ meditera när man vill. Idag är de flesta
          apparna anpassade för hörande och har endast undertext om man har tur.
          Vi tycker att detta borde finnas på teckenspråk och därför bestämde vi
          oss för att försöka skapa detta. Begreppet Signfulness är inspirerat av
          ordet Mindfulness som dyker upp i alltfler sammanhang. Själva namnet
          står för tecken, sinnesnärvaro och medveten närvaro. Allt fler lever för
          lite i livet, är omedvetna om vilka vi är, vad vi gör, säger och tänker.
          Mindfulness är en teknik där man tränar på att vara uppmärksam, tar
          tillvara på ögonblicket och lär sig leva mer i nuet, genom Signfulness
          vill vi inspirera till detta på teckenspråk. Att lära sig styra sitt
          medvetande och sin egen uppmärksamhet är själva grunden i tekniken. Allt
          vi gör, både videor och live är självklart på teckenspråk. Vi hoppas av
          hela våra hjärtan att den här hemsidan hjälper er att vakna och se livet
          på ett nytt sätt!
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.textBox}>
        <Typography variant="h2">Vi vill tacka alla som hjälpt oss på vägen!</Typography>
        <Typography
          variant="body1"
          className={classes.textpadding}>
       Vi är evigt tacksamma till alla som har hjälpt oss att göra detta möjligt. Nedan kan du läsa om några av de fantastiska personerna som har hjälpt oss på vägen.
        </Typography>
      </Grid>

      <ThankYouBoxLeft
        img={
          'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
        Name="Philip"
        Text="Philip har hjälpt oss att skapa musik som är anpassad för döva/hörselskadade. Musiken är till meditationerna. "
      />
      <ThankYouBoxRight
        Name="Josephine"
        Text="Vi vill tacka Josephine som har hjälpt oss med designen och uppbyggnandet av denna hemsid."
        img={
          'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        }
      />
      <Footer />
    </Grid>
  );
};

export default OmOss;

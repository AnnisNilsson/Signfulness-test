import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import InformationBox from '../components/InformationBox';
import SectionSecond from '../components/YogaMeditationSectionSecond/SectionSecond';
import yoga1 from '../media/yoga1.png';
import { Typography } from '@material-ui/core';
import SectionFirst from '../components/YogaMeditationSectionSecond/SectionFirst';
import Footer from '../components/Footer/Footer';


const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
    marginTop: '5vh',
  },
  space:{
    padding:'25px 0 25px 0'
  },
  startImg: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1562832135-14a35d25edef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1115&q=80")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
    color: 'white',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize:'40pt'
  },
  // heading: {
  //   display: 'flex',
  //   backgroundColor: '#689E9E',
  //   textAlign: 'end',
  //   [theme.breakpoints.down('sm')]: {
  //     textAlign: 'center',
  //     width: '100vw',
  //     paddingTop: '5vh',
  //     paddingBottom: '5vh',
  //   },
  // },
  // headingText: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   color: '#FFFFFF',
  //   marginTop: 'auto',
  //   marginBottom: 'auto',
  //   textAlign: 'center',
  // },
  img: {
    objectFit: 'cover',
    width: '50vw',
    height: '50vh',
    padding: 0,
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  lastSection:{
    padding:'25px 0 25px 0',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
    },

  }
}));

const Start = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={12} className={classes.startImg}>
        <Typography variant='h4' className={classes.heading}>Signfulness</Typography>
        <Typography variant='h1'>Sign for your mind</Typography>
      </Grid>
      <Grid item xs={12} className={classes.space}>
        <SectionFirst
          img={yoga1}
          alt='meditation'
          title='Hitta din inre röst'
          description='Många letar och letar i den yttre världen efter lycka. Bättre jobb, roligare partner, snyggare kläder men när vi väl får det är vi ändå inte nöjda men vi förstår inte varför. Kan du känna ångest, oro eller att något inte känns helt rätt men att du inte förstår vad det beror på? Du vill något eller någonstans men du vet inte riktigt vad eller vart? Detta är vanliga känslor och leder ofta till att vi söker lycka i den yttre världen när vi egentligen sitter på alla svaren själva. Meditation och yoga kan vara nyckeln till att börja skifta vårt fokus mot en plats där du kan hitta många nya lärdomar och insikter. Alla svar du behöver finns inom dig du behöver bara lära dig att lyssna till din inre röst. '
        />
      </Grid>
      {/* <Grid item xs={12}> */}
        <InformationBox
          flexDirection='row'
          backgroundColor='#6A9E9E'
          textColor='#FFFFFF'
          backgroundImage='https://images.pexels.com/photos/5345858/pexels-photo-5345858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          heading='Varför meditera?'
          text='Stress, oro och ångest kommer inte utifrån. Dessa känslor och upplevelser är reaktioner på yttre faktorer. Eftersom jag själv är skaparen till mina känslor är det också jag som kan lära mig att bemästra dem och få dem att försvinna eller förstärkas. Meditation är ett bra verktyg för att lära sig att hantera sina tankar och känslor. Läs mer om de positiva effekterna av meditation och hur du kan komma igång!'
          link='Link'
        />
        <InformationBox
          flexDirection='row-reverse'
          backgroundColor='#D9BAAF'
          textColor='#FFFFFF'
          backgroundImage='https://images.pexels.com/photos/5201529/pexels-photo-5201529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          heading='Varför yoga?'
          text='Det finns olika anledningar till att utöva yoga. Några vill bli rörligare, vissa vill minska stressa nivåerna och bli mer närvarande och andra vill få bättre kontroll på kroppen. I yogabaserade övningar ingår alltid kropp, andning och sinne. Var man lägger den största vikten beror på yogastilen. Poängen med yoga är att göra det som känns bra för just dig, därför spelar kön, ålder eller fysik ingen roll. Vill du veta mer om yoga eller hur du kan komma igång? Läs mer om yoga här?'
          link='Link'
        />
      {/* </Grid> */}

  
      <Grid item xs={12} className={classes.lastSection}>
      <SectionSecond
          img='https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
          alt='signfulness'
          title='Signfulness'
          description='Vi tycker att det är viktigt att leva ett liv i närvaro och mindfulness kan vara ett bra verktyg till just det. Vårt namn Signfulness är därför inspirerat av ordet mindfulness. Allt vi gör är på teckenspråk (signs) och vi tycker därför att ordet signfulness är en bra representation för vad vi gör och står för. Vi tror också att om du lever ett liv i närvaro kommer livet att visa dig vägen. Om du litar på livet och är öppen och närvarande kommer du lättare se tecken (signs) vart du ska. '
        />
      </Grid>
      <Footer/>
    </Grid>
  );
};
export default Start;

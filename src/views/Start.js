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
          title='Hitta din inre r??st'
          description='M??nga letar och letar i den yttre v??rlden efter lycka. B??ttre jobb, roligare partner, snyggare kl??der men n??r vi v??l f??r det ??r vi ??nd?? inte n??jda men vi f??rst??r inte varf??r. Kan du k??nna ??ngest, oro eller att n??got inte k??nns helt r??tt men att du inte f??rst??r vad det beror p??? Du vill n??got eller n??gonstans men du vet inte riktigt vad eller vart? Detta ??r vanliga k??nslor och leder ofta till att vi s??ker lycka i den yttre v??rlden n??r vi egentligen sitter p?? alla svaren sj??lva. Meditation och yoga kan vara nyckeln till att b??rja skifta v??rt fokus mot en plats d??r du kan hitta m??nga nya l??rdomar och insikter. Alla svar du beh??ver finns inom dig du beh??ver bara l??ra dig att lyssna till din inre r??st. '
        />
      </Grid>
      {/* <Grid item xs={12}> */}
        <InformationBox
          flexDirection='row'
          backgroundColor='#6A9E9E'
          textColor='#FFFFFF'
          backgroundImage='https://images.pexels.com/photos/5345858/pexels-photo-5345858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          heading='Varf??r meditera?'
          text='Stress, oro och ??ngest kommer inte utifr??n. Dessa k??nslor och upplevelser ??r reaktioner p?? yttre faktorer. Eftersom jag sj??lv ??r skaparen till mina k??nslor ??r det ocks?? jag som kan l??ra mig att bem??stra dem och f?? dem att f??rsvinna eller f??rst??rkas. Meditation ??r ett bra verktyg f??r att l??ra sig att hantera sina tankar och k??nslor. L??s mer om de positiva effekterna av meditation och hur du kan komma ig??ng!'
          linkText='L??s mer om meditation h??r  ???'
          link='/Yoga_Meditation'
        />
        <InformationBox
          flexDirection='row-reverse'
          backgroundColor='#D9BAAF'
          textColor='#FFFFFF'
          backgroundImage='https://images.pexels.com/photos/5201529/pexels-photo-5201529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          heading='Varf??r yoga?'
          text='Det finns olika anledningar till att ut??va yoga. N??gra vill bli r??rligare, vissa vill minska stressa niv??erna och bli mer n??rvarande och andra vill f?? b??ttre kontroll p?? kroppen. I yogabaserade ??vningar ing??r alltid kropp, andning och sinne. Var man l??gger den st??rsta vikten beror p?? yogastilen. Po??ngen med yoga ??r att g??ra det som k??nns bra f??r just dig, d??rf??r spelar k??n, ??lder eller fysik ingen roll. Vill du veta mer om yoga eller hur du kan komma ig??ng? L??s mer om yoga h??r?'
          linkText='L??s mer om yoga h??r  ???'
          link='/Yoga_Meditation'
        />
      {/* </Grid> */}

  
      <Grid item xs={12} className={classes.lastSection}>
      <SectionSecond
          img='https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80'
          alt='signfulness'
          title='Signfulness'
          description='Vi tycker att det ??r viktigt att leva ett liv i n??rvaro och mindfulness kan vara ett bra verktyg till just det. V??rt namn Signfulness ??r d??rf??r inspirerat av ordet mindfulness. Allt vi g??r ??r p?? teckenspr??k (signs) och vi tycker d??rf??r att ordet signfulness ??r en bra representation f??r vad vi g??r och st??r f??r. Vi tror ocks?? att om du lever ett liv i n??rvaro kommer livet att visa dig v??gen. Om du litar p?? livet och ??r ??ppen och n??rvarande kommer du l??ttare se tecken (signs) vart du ska. '
        />
      </Grid>
      <Footer/>
    </Grid>
  );
};
export default Start;

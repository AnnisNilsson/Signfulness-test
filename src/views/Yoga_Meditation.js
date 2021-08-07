import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import YogaMeditationHeader from '../components/YogaMeditationHeader';
import SectionTwo from '../components/YogaMeditationSectionFirst/SectionTwo';
import SectionOne from '../components/YogaMeditationSectionFirst/SectionOne';
import SectionFirst from '../components/YogaMeditationSectionSecond/SectionFirst';
import SectionSecond from '../components/YogaMeditationSectionSecond/SectionSecond';
import meditation2 from '../media/meditation2.png';
import yoga2 from '../media/yoga2.png';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginTop: '5vh',
  },
}));

const Yoga_Meditation = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.container}>
      <Grid item xs={12}>
        <YogaMeditationHeader />
      </Grid>
      <Grid item xs={12}>
        <SectionOne
          img={meditation2}
          alt='meditation'
          title='Varför meditera?'
          description='Meditation förbättrar livskvaliteten då det är ett sätt att komma ner i varv, lugna ner sinnet, minska stress/oro och slappna. Meditation kan man likna vid att se ut över havet medan tankarna flyter iväg. Syftet med meditation är att själv kunna välja och ha förmågan gå in i tillståndet när du själv vill. Meditation är inte en helt vanlig vila utan uppväcker en djupare avslappning då den framkallar ett unikt naturligt tillstånd samt bibehåller en hög sinnesnärvaro. Att utöva meditation regelbundet kan stärka ditt immunförsvar, förbättra din ämnesomsättning samt dämpa depression och ångest.'
        />
      </Grid>
      <Grid item xs={12}>
        <SectionFirst
          img={
            'https://images.pexels.com/photos/4047042/pexels-photo-4047042.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          }
          title='kom igång med meditation'
          description='Det kan vara svårt att komma över den första tröskeln för att börja meditera men sanningen är att alla kan meditera. Det viktigaste med meditation är att den blir av. Fem minuter om dagen räcker till att börja med och gör stor skillnad. Genom regelbunden meditation kan du lära dig att tämja dina tankar, bli gladare och mer närvarande i ditt liv. Hitta ditt sätt att meditera på, vissa gillar att ligga/ sitta lugnt och stilla andra vill ha stå eller gå. Det finns de som tycker det är skönt att ha musik på och röra sig i takt till den vissa vill ha det helt tyst och andra vill se en guidad meditation. Det finns inga rätt eller fel, det gäller bara att hitta ditt sätt och vad som får dig att slappna av och må bra.'
        />
      </Grid>
      <Grid item xs={12}>
        <SectionTwo
          img={yoga2}
          title='Varför yoga?'
          description='Yoga och meditation har många liknande positiva effekter då båda handlar om mindfulness, att rikta sina tankar och vara här och nu. Regelbundet utövande av yoga kan minska stress, förbättra ditt immunförsvar, ge mer energi och starkare muskler. Inom träning är återhämtning väldigt viktigt. Att vi sover en tredjedel av våra liv är inte av en tillfällighet, kroppen och hjärnan behöver städa, rensa och byggas upp. Det som gör yoga unikt är kombinationen av rörelse och vila. Genom yoga kan man både öka koncentrationsförmågan och förbättra minnet.'
          backgroundColor='#E0CAC2'
        />
      </Grid>
      <Grid item xs={12}>
        <SectionSecond
          img={
            'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          }
          title='Kom igång med yoga'
          description='Det kan kännas tufft att komma igång med yoga men kom ihåg att det är de små stunderna som räknas. Du behöver inte köra ett 60 minuters pass direkt eller göra avancerade övningar om du inte vill. Börja enkelt, gå in i en yogaposition som känns bra för dig och lyssna på kroppen och känn hur den känns här och nu. Det räcker med att göra det en kort stund och kom ihåg att andas. Om det är svårt att hitta motivation för att komma igång tänk på det positiva effekterna som yogan har för både kropp och själ. Det finns de som tycker om att gå på pass, andra vill se yogalektioner online. Hitta din egen yogastil, det är lätt att tro att man måste göra på ett speciellt sätt men hitta vad som passar dig och följ din inre guide och lyssna till din kropp!'
        />
      </Grid>
    </Grid>
  );
};

export default Yoga_Meditation;

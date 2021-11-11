import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import InspirationBox1 from '../components/InspirationBoxes/InspirationBox1';
import InspirationBox2 from '../components/InspirationBoxes/InspirationBox2';
import InspirationBox3 from '../components/InspirationBoxes/InspirationBox3';
import InspirationBox4 from '../components/InspirationBoxes/InspirationBox4';
import ocean from '../media/ocean.jpg'
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  heading: {
    transform: 'rotate(-90deg)',
    marginTop: '-153px',
    marginLeft: '-84vw',
    color: '#FFFFFF',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20pt',
    },
  },
  boxContainer:{
    marginTop:'10vh'
  },
  imgContainer:{
    width:'100%',
  },
  imagebox:{
    width:'100%',
    height:'50%'
  },
  headerImg: {
    objectFit: 'cover',
    backgroundPosition: 'center',
    height: '30vh',
    width: '30vw',
    position: 'relative',
    top: 30,
    right: 62,
    zIndex: 2,
  },
  colorBox: {
    backgroundColor: '#E0CAC2',
    height: '30vh',
    width: '30vw',
    position: 'absolute',
    top: 177,
    zIndex: 1,
  },
  name: {
    display: 'flex',
    zIndex: 3,
    position: 'relative',
    top: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: '18pt',
    },
  },
}));

const Inspiration = (props) => {
  const classes = useStyles();
  return (
    <Grid container spacing={10} className={classes.container}>
      {/* <Grid item className={classes.header}> */}
        <Grid className={classes.imgContainer}>
        <img src={ocean} className={classes.imagebox} alt="ocean"></img>
        </Grid>
        <Typography
          className={classes.heading}
          variant='h1'
          color='textPrimary'
        >
          INSPIRATION
        </Typography>

      <Grid item xs={10} className={classes.boxContainer}>
        <InspirationBox1
          borderColor='#E0CAC2'
          heading='Vad är självkärlek?'
          text='Självkärlek handlar om att komma i kontakt med dig själv och även en djup kärlek till dig själv, välmående och lycka. Men vad betyder det egentligen?'
          readMore='Jo, du kanske tänker att detta endast omfattar kärlek till din kropp men det är mycket mer än så. Själv kärlekshandling är att verkligen älska dig själv, på ett djupare sätt. Att du accepterar den du är, din kropp och dina misstag. Det kan tyckas som en tuff utmaning och det är det men samtidigt är det väldigt viktigt för ditt välmående.
          Att prioritera ditt psykiska och fysiska välbefinnande är viktigt samt att försöka vara mindre hård mot dig själv. Självkärlek är ett sätt att tro på dig själv och din förmåga att åstadkomma de mål och drömmar som du har. När du väl gör det för självkärlek, så har du en härlig energi i dig som gör att du njuter så mycket mer än du kan ana och dessutom utstrålar du kärlek. Föreställ dig att du möter människor i ditt liv som utstrålar härliga och varma energier. De har full ögonkontakt och du känner dig helt fullkomlig sedd, bekräftad, lyssnad och respekterad. Så varför inte göra det för dig själv? Tänk dig att kunna älska dig och bekräfta dig själv i alla livets skeden? Det måste vara skönt att inte sträva ständigt efter andras godkännande, beundrande blickar eller bli respekterad.
          Stå upp för dig själv och var alltid snäll mot dig själv även om du möter svåra och tuffa utmaningar.
          Var din egen bästa vän, nu och för alltid.'
        />
      </Grid>
      <Grid item xs={10}>
        <InspirationBox2
          backgroundColor='#6A9E9E'
          heading='Tacksamhet'
          text='Nuförtiden har vi glömt bort hur det är att vara tacksam för det vi har i livet då det är lätt att ta det för givet. Små eller stora saker. ”Tacksam för vad?” kanske du tänker.'
          readMore='Se dig omkring – vi människor är ständigt på jakt efter lyckan i livet och ofta letar vi på de märkligaste av ställen. Men vad är det egentligen som gör oss lyckliga? Många av oss vill ha mer, mer, mer. Hela tiden. Vi blir aldrig nöjda. Vi jagar lycka i materiella ting som hus, bilar, kläder, smink, smycken... ja listan kan göras lång. En sak behöver du veta – att den lyckan inte finns att finna där. Varför? För så länge vi inte på riktigt är tacksamma över det vi har kommer vi aldrig hitta den där magiska och ovärderliga lyckan.
          Det krävs övning till att vara tacksam för det du har i livet. Och med det kommer du finna din lycka. Skriv en tacksamhetsdagbok där du skriver ner minst 3 saker du är tacksam över. På morgon, på kvällen eller kanske både och. Känslan av tacksamhet stärks ju mer du skriver. Det är väldigt enkelt att vara tacksamhet – det krävs bara ett leende, ett ”tack” eller en liten lapp till personen du tackar för vad denne gjort och hur glad du blev.
          Som du ser, behöver du inte alls anstränga dig särskilt mycket, för tacksamhet är inte en ansträngning. Eller... kanske är det för att vi så ofta glömmer bort det. Vi är så upptagna med vår egen värld att vi glömmer vad som finns omkring oss. Hur många gånger har du stannat upp för att tänka på vad du har och hur många gånger har du varit medveten om att du inte behöver något annat eftersom du redan har allt? Vi tror att vänner och familj alltid kommer finnas där för oss. Vi inser inte att allt kan förändras på 24 timmar, eller till och med på ett ögonblick, 
          och att det sedan kan vara för sent att uppskatta de vi har förlorat. Så ta aldrig människor du älskar högt eller livet för givet.'
        />
      </Grid>
      <Grid item xs={10}>
        <InspirationBox4
          backgroundColor='#E0CAC2'
          heading='Andningsövning'
          text='Andning är livsviktigt. I samhället stressar vi så mycket och är uppe i varv att vi glömmer bort att andas ordentligt. Vi andas för lite och för ytligt, många andas grunligt och uppe i bröstet.'
          readMore='Genom att andas långt ner i magen aktiveras kroppens broms vilket leder till minskat stresspåslag sänkt blodtrycket. Vid stress andas du snabbare än vad du bör, vilket kan leda till trötthet, sämre immunförsvar och en långsammare förbränning.
          Du kan träna upp din andning genom att göra olika övningar och du kan hitta mycket bra tips i böcker, andnings guider, videor och kurser. Andningen gör mycket positivt för oss t.ex. hjälper den till att få matsmältningen att fungera optimalt.
          Det räcker med att göra andningsövning 5 minuter i början. Sitt på en stol, soffan eller var du vill så länge du sitter bekvämt, rakt och öppet. Stäng dina ögon och andas in djupt genom näsan och ut genom munnen. Låt det bli en naturlig process och pressa inte för mycket. Du behöver vara medveten om att din andning kommer djupare och saktare. Fokusera all din uppmärksamhet på andningen. Känn hur du andas in och ut och känn pausen mellan andetag. Om du tappar fokus och dina tankar leder bort dig från andningen, ta då tillbaka uppmärksamheten mjukt och fokusera åter på andningen. Känn hur magen och bröstkorgen rör sig upp och ner då minskar dina tankar och du slappnar av djupare.
          Gör övningen så ofta som möjligt och tänk på att vissa dagar kommer det kännas bättre och andra sämre.'
        />
      </Grid>
      <Grid item xs={10}>
        <InspirationBox3
          backgroundColor='#6A9E9E'
          textColor='#FFFFFF'
          backgroundImage='https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          heading='HSP'
          text='HSP är en förkortning på - Hög känslighet person (engelska Highly Sensitive person) det är ett personlighetsdrag. Man kan säga högkänslig person. Många personer som är HSP som blir extra, känsliga, lättrörda, sårbara, medkännande, empatiska, omtänksamma, etc.'
          readMore='De ovannämnda egenskaper men de har ett känsligare nervsystem och en hjärna som fungerar annorlunda. De noterar detaljer som de reflekterar över och bearbetar på ett djupare plan. Detta leder till en mängd ovärderliga egenskaper men också att högkänsliga personer lätt blir överstimulerade och/eller överväldigade. Detta kan leda till att man helst vill dra sig undan och vara ifred för att få tid för sig själv. En högkänslig person kan lättare bli trött och utmattad när det händer för mycket nytt på en och samma gång. HSP lägger ofta snabbt märke till faror eller känner av när någon i gruppen inte mår bra. Enligt vetenskapen är det bevisat att hjärnan hos en HSP har en större förmåga att ta in intryck djupare och bearbeta information mer än andra. Det är en egenskap du föds med. Vanligast missförstånd hos andra är att folk tror det är en bokstavskombination eller diagnos men så är inte fallet. Det är ett personlighetsdrag, och nästan var femte människa är högkänslig.'
      />
      </Grid>
    </Grid>
  );
};
Inspiration.propTypes = {};
export default Inspiration;

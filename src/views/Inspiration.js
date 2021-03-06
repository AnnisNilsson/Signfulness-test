import React from 'react';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';
import InspirationBox1 from '../components/InspirationBoxes/InspirationBox1';
import InspirationBox2 from '../components/InspirationBoxes/InspirationBox2';
import InspirationBox3 from '../components/InspirationBoxes/InspirationBox3';
import InspirationBox4 from '../components/InspirationBoxes/InspirationBox4';
import ocean from '../media/ocean.jpg'
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';

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
          heading='Vad ??r sj??lvk??rlek?'
          text='Sj??lvk??rlek handlar om att komma i kontakt med dig sj??lv och ??ven en djup k??rlek till dig sj??lv, v??lm??ende och lycka. Men vad betyder det egentligen?'
          readMore='Jo, du kanske t??nker att detta endast omfattar k??rlek till din kropp men det ??r mycket mer ??n s??. Sj??lv k??rlekshandling ??r att verkligen ??lska dig sj??lv, p?? ett djupare s??tt. Att du accepterar den du ??r, din kropp och dina misstag. Det kan tyckas som en tuff utmaning och det ??r det men samtidigt ??r det v??ldigt viktigt f??r ditt v??lm??ende.
          Att prioritera ditt psykiska och fysiska v??lbefinnande ??r viktigt samt att f??rs??ka vara mindre h??rd mot dig sj??lv. Sj??lvk??rlek ??r ett s??tt att tro p?? dig sj??lv och din f??rm??ga att ??stadkomma de m??l och dr??mmar som du har. N??r du v??l g??r det f??r sj??lvk??rlek, s?? har du en h??rlig energi i dig som g??r att du njuter s?? mycket mer ??n du kan ana och dessutom utstr??lar du k??rlek. F??rest??ll dig att du m??ter m??nniskor i ditt liv som utstr??lar h??rliga och varma energier. De har full ??gonkontakt och du k??nner dig helt fullkomlig sedd, bekr??ftad, lyssnad och respekterad. S?? varf??r inte g??ra det f??r dig sj??lv? T??nk dig att kunna ??lska dig och bekr??fta dig sj??lv i alla livets skeden? Det m??ste vara sk??nt att inte str??va st??ndigt efter andras godk??nnande, beundrande blickar eller bli respekterad.
          St?? upp f??r dig sj??lv och var alltid sn??ll mot dig sj??lv ??ven om du m??ter sv??ra och tuffa utmaningar.
          Var din egen b??sta v??n, nu och f??r alltid.'
        />
      </Grid>
      <Grid item xs={10}>
        <InspirationBox2
          backgroundColor='#6A9E9E'
          heading='Tacksamhet'
          text='Nuf??rtiden har vi gl??mt bort hur det ??r att vara tacksam f??r det vi har i livet d?? det ??r l??tt att ta det f??r givet. Sm?? eller stora saker. ???Tacksam f??r vad???? kanske du t??nker.'
          readMore='Se dig omkring ??? vi m??nniskor ??r st??ndigt p?? jakt efter lyckan i livet och ofta letar vi p?? de m??rkligaste av st??llen. Men vad ??r det egentligen som g??r oss lyckliga? M??nga av oss vill ha mer, mer, mer. Hela tiden. Vi blir aldrig n??jda. Vi jagar lycka i materiella ting som hus, bilar, kl??der, smink, smycken... ja listan kan g??ras l??ng. En sak beh??ver du veta ??? att den lyckan inte finns att finna d??r. Varf??r? F??r s?? l??nge vi inte p?? riktigt ??r tacksamma ??ver det vi har kommer vi aldrig hitta den d??r magiska och ov??rderliga lyckan.
          Det kr??vs ??vning till att vara tacksam f??r det du har i livet. Och med det kommer du finna din lycka. Skriv en tacksamhetsdagbok d??r du skriver ner minst 3 saker du ??r tacksam ??ver. P?? morgon, p?? kv??llen eller kanske b??de och. K??nslan av tacksamhet st??rks ju mer du skriver. Det ??r v??ldigt enkelt att vara tacksamhet ??? det kr??vs bara ett leende, ett ???tack??? eller en liten lapp till personen du tackar f??r vad denne gjort och hur glad du blev.
          Som du ser, beh??ver du inte alls anstr??nga dig s??rskilt mycket, f??r tacksamhet ??r inte en anstr??ngning. Eller... kanske ??r det f??r att vi s?? ofta gl??mmer bort det. Vi ??r s?? upptagna med v??r egen v??rld att vi gl??mmer vad som finns omkring oss. Hur m??nga g??nger har du stannat upp f??r att t??nka p?? vad du har och hur m??nga g??nger har du varit medveten om att du inte beh??ver n??got annat eftersom du redan har allt? Vi tror att v??nner och familj alltid kommer finnas d??r f??r oss. Vi inser inte att allt kan f??r??ndras p?? 24 timmar, eller till och med p?? ett ??gonblick, 
          och att det sedan kan vara f??r sent att uppskatta de vi har f??rlorat. S?? ta aldrig m??nniskor du ??lskar h??gt eller livet f??r givet.'
        />
      </Grid>
      <Grid item xs={10}>
        <InspirationBox4
          backgroundColor='#E0CAC2'
          heading='Andnings??vning'
          text='Andning ??r livsviktigt. I samh??llet stressar vi s?? mycket och ??r uppe i varv att vi gl??mmer bort att andas ordentligt. Vi andas f??r lite och f??r ytligt, m??nga andas grunligt och uppe i br??stet.'
          readMore='Genom att andas l??ngt ner i magen aktiveras kroppens broms vilket leder till minskat stressp??slag s??nkt blodtrycket. Vid stress andas du snabbare ??n vad du b??r, vilket kan leda till tr??tthet, s??mre immunf??rsvar och en l??ngsammare f??rbr??nning.
          Du kan tr??na upp din andning genom att g??ra olika ??vningar och du kan hitta mycket bra tips i b??cker, andnings guider, videor och kurser. Andningen g??r mycket positivt f??r oss t.ex. hj??lper den till att f?? matsm??ltningen att fungera optimalt.
          Det r??cker med att g??ra andnings??vning 5 minuter i b??rjan. Sitt p?? en stol, soffan eller var du vill s?? l??nge du sitter bekv??mt, rakt och ??ppet. St??ng dina ??gon och andas in djupt genom n??san och ut genom munnen. L??t det bli en naturlig process och pressa inte f??r mycket. Du beh??ver vara medveten om att din andning kommer djupare och saktare. Fokusera all din uppm??rksamhet p?? andningen. K??nn hur du andas in och ut och k??nn pausen mellan andetag. Om du tappar fokus och dina tankar leder bort dig fr??n andningen, ta d?? tillbaka uppm??rksamheten mjukt och fokusera ??ter p?? andningen. K??nn hur magen och br??stkorgen r??r sig upp och ner d?? minskar dina tankar och du slappnar av djupare.
          G??r ??vningen s?? ofta som m??jligt och t??nk p?? att vissa dagar kommer det k??nnas b??ttre och andra s??mre.'
        />
      </Grid>
      <Grid item xs={10}>
        <InspirationBox3
          backgroundColor='#6A9E9E'
          textColor='#FFFFFF'
          backgroundImage='https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          heading='HSP'
          text='HSP ??r en f??rkortning p?? - H??g k??nslighet person (engelska Highly Sensitive person) det ??r ett personlighetsdrag. Man kan s??ga h??gk??nslig person. M??nga personer som ??r HSP som blir extra, k??nsliga, l??ttr??rda, s??rbara, medk??nnande, empatiska, omt??nksamma, etc.'
          readMore='De ovann??mnda egenskaper men de har ett k??nsligare nervsystem och en hj??rna som fungerar annorlunda. De noterar detaljer som de reflekterar ??ver och bearbetar p?? ett djupare plan. Detta leder till en m??ngd ov??rderliga egenskaper men ocks?? att h??gk??nsliga personer l??tt blir ??verstimulerade och/eller ??verv??ldigade. Detta kan leda till att man helst vill dra sig undan och vara ifred f??r att f?? tid f??r sig sj??lv. En h??gk??nslig person kan l??ttare bli tr??tt och utmattad n??r det h??nder f??r mycket nytt p?? en och samma g??ng. HSP l??gger ofta snabbt m??rke till faror eller k??nner av n??r n??gon i gruppen inte m??r bra. Enligt vetenskapen ??r det bevisat att hj??rnan hos en HSP har en st??rre f??rm??ga att ta in intryck djupare och bearbeta information mer ??n andra. Det ??r en egenskap du f??ds med. Vanligast missf??rst??nd hos andra ??r att folk tror det ??r en bokstavskombination eller diagnos men s?? ??r inte fallet. Det ??r ett personlighetsdrag, och n??stan var femte m??nniska ??r h??gk??nslig.'
      />
      </Grid>
      <Footer/>
    </Grid>
  );
};
Inspiration.propTypes = {};
export default Inspiration;

import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider, Grid } from '@material-ui/core';
import { firebaseAuth } from './providers/AuthProvider';
import theme from './theme/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import LoginViews from './views/LoginViews';
import Meditation from './views/Meditation';
import KontaktaOss from './views/KontaktaOss';
import Inspiration from './views/Inspiration';
import Yoga_Meditation from './views/Yoga_Meditation';
import Yoga from './views/Yoga';
import Home from './views/Home';
import OmOss from './views/OmOss';
import Start from './views/Start';
import VideoView from './views/VideoView';
import fetchVideos from './actions';
import VideoViewSamya from './views/VideoViewSamya';
import VideoViewSamya2 from './views/VideoViewSamya2';
import VideoViewRahima from './views/VideoViewRahima';
import VideoViewAnnis from './views/VideoViewAnnis'; 
import SnigelPosition from './views/Yoga/SnigelPosition';
import AnkleStrech from './views/Yoga/AnkleStrech';
import Bananasana from './views/Yoga/Bananasana';
import CaterpillarPose from './views/Yoga/CaterpillarPose';
import CatPosition from './views/Yoga/CatPosition';
import BarnPositionen from './views/Yoga/BarnPositionen';
import Dinglar from './views/Yoga/Dinglar';
import ToePose from './views/Yoga/ToePose';

function App(props) {
  const [videos, setVideos] = useState([]);
  const { handleSignout } = useContext(firebaseAuth);
  useEffect(() => {
    props.dispatch(fetchVideos(props.dispatch));

    setVideos([...props.videos]);
  }, []);

  return (
    <Grid>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar onSignout={handleSignout} />

        <Switch>
          <Route
            path='/'
            exact
            render={(rProps) =>
              'token' in localStorage ? <Home /> : <Start />
            }
          />
          <Route path='/Home' component={Home} />
          <Route path='/Meditation'>
            <Meditation videos={props.videos} />
          </Route>
          <Route path={'/Video/:id'}>
            <VideoView videos={props.videos} />
          </Route>
          <Route path='/Yoga_Meditation' component={Yoga_Meditation} />
          <Route path='/Yoga' component={Yoga} />
          <Route path='/VideoViewSamya' component={VideoViewSamya} />
          <Route path='/VideoViewSamya2' component={VideoViewSamya2} />
          <Route path='/VideoViewRahima' component={VideoViewRahima} />
          <Route path='/VideoViewAnnis' component={VideoViewAnnis} /> 
          <Route path='/OmOss' component={OmOss} />
          {/* <Route path="/:id" component={Video}/> */}
          <Route path='/Login' component={LoginViews} />
          <Route path='/Inspiration' component={Inspiration} />
          <Route path='/Kontakt' component={KontaktaOss} />
          <Route path='/SnigelPosition' component={SnigelPosition} />
          <Route path='/AnkleStrech' component={AnkleStrech} />  
          <Route path='/Bananasana' component={Bananasana} /> 
          <Route path='/CaterpillarPose' component={CaterpillarPose} /> 
          <Route path='/CatPosition' component={CatPosition} /> 
          <Route path='/BarnPositionen' component={BarnPositionen} /> 
          <Route path='/Dinglar' component={Dinglar} />  
          <Route path='/ToePose' component={ToePose} /> 
        
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
 
    </Grid>
  );
}
const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};
export default connect(mapStateToProps)(App);

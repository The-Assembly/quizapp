import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Play from './components/Play';
import Results from './components/Results';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="play"
          hideNavBar={true}
          component={Play}
          title="Play"
          panHandlers={null}
          initial
        />

        <Scene
          key="results"
          hideNavBar={true}
          component={Results}
          title="Results"
          panHandlers={null}
        />
      </Scene>
    </Router>
  );
};

export default App;

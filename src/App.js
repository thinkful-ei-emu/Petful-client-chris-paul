import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AdoptionPage from './AdoptionPage/AdoptionPage';
import SuccessPage from './SuccessPage/SuccessPage';
import QueuePage from './QueuePage/QueuePage';
import AddPetPage from './AddPetPage/AddPetPage';
import './App.css';

export default class App extends React.Component {
  render(){
  return (
    <div className="App">
        <Switch>
          <Route
            exact path={'/'}
            component={LandingPage}
          />
          <Route
          path={'/queue'}
          component={QueuePage}
          />
          <Route
            path={'/adoption'}
            component={AdoptionPage}
          />
          <Route
            path={'/success'}
            component={SuccessPage}
          />
          <Route
            path={'/addAPet'}
            component={AddPetPage}
          />
        </Switch>
    </div>
  );
  }
}

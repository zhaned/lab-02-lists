import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ACContainer from '../../containers/ACContainer';
import VillagerContainer from '../../containers/VillagerContainer';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ='/' component={ACContainer} />
        <Route path="/:id" component={VillagerContainer} />
      </Switch>
    </BrowserRouter>
  )
}

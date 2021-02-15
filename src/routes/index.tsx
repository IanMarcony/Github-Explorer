import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/repository/:repository+" component={Repository} />
    </Switch>
  </Router>
);

export default Routes;

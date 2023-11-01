import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import ReportIndex from './components/ReportIndex';
import CreateReportForm from './components/CreateReportForm';
import EditReportForm from './components/EditReportForm';
import ReportShow from './components/ReportShow';

const App = () => (
  <>
    <NavLink to={'/'}>
      <h1>Progress Tracker Lite</h1>
    </NavLink>
    <Switch>
      <Route exact path="/" component={ReportIndex} />
      <Route path="/reports/new" component={CreateReportForm} />
      <Route exact path="/reports/:reportId" component={ReportShow} />
      <Route path="/reports/:reportId/edit" component={EditReportForm} />
    </Switch>
  </>
);

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../views/About';
import Dashboard from '../views/Dashboard';
import DictationCreateEdit from '../views/DictationCreateEdit';
import NotFound from '../views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  DICTATION_CREATE: `${ publicPath }dictation/create`,
  DICTATION_EDIT: `${ publicPath }dictation/:id/edit`,
  ABOUT: `${ publicPath }about`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Dashboard } />
    <Route path={ routeCodes.ABOUT } component={ About } />
    <Route path={ routeCodes.DICTATION_CREATE } component={ DictationCreateEdit } />
    <Route path={ routeCodes.DICTATION_EDIT } component={ DictationCreateEdit } />
    <Route path='*' component={ NotFound } />
  </Switch>
);

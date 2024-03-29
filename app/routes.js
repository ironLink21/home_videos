'use strict';

import React                          from 'react'; // if you use jsx, you have to have React imported
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './js/components/layout/index';
import Home                           from './js/components/home_video';
import NotFound                       from './js/components/common/not_found';

export default (
  <Router history={appHistory}>
    <Route path='/' component={Index}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
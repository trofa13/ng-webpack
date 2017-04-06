require('../css/index.scss');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './components';

angular.module('olabs', [
  uiRouter,
  Components.name
])
    .directive('app', AppComponent);

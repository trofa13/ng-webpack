require('../css/index.scss');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './components';
import Services from './services';

angular.module('olabs', [
  uiRouter,
  Components.name,
  Services.name
])
    .directive('app', AppComponent);

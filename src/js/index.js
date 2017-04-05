require('../css/index.scss');

import angular from 'angular';
import AppComponent from './app.component.js';
import Components from './components';

angular.module('olabs', [
    Components.name
])
    .directive('app', AppComponent);
import angular from 'angular';
import HomeFactory from './home.factory';

let homeModule = angular.module('home')

  .factory('HomeFactory', HomeFactory);

export default homeModule;

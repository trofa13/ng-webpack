import angular from 'angular';
import User from './user';
import AuthInterceptor from './auth';
import HomeFactory from './home';

export default angular.module('app.services', [
  User.name,
  AuthInterceptor.name,
  HomeFactory.name
]);

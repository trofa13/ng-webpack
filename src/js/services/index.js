import angular from 'angular';
import User from './user';
import AuthInterceptor from './auth';

export default angular.module('app.services', [
  User.name,
  AuthInterceptor.name
]);

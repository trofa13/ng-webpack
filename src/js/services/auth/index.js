import angular from 'angular';
import AuthInterceptor from './auth.interceptor';

let userModule = angular.module('auth', [])

  .factory('AuthInterceptor', AuthInterceptor);

export default userModule;

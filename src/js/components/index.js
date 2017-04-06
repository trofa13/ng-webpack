import angular from 'angular';
import Home from './home/home.module';
import Login from './login/login.module';

export default angular.module('app.components', [
  Home.name,
  Login.name
]);

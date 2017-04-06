import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider, $httpProvider) => {
    $urlRouterProvider.otherwise('/');
    $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<home></home>',
        resolve: { authenticate: authenticate }
      });
  })
    .component('home', homeComponent);

export default homeModule;

authenticate.$inject = ['$q', 'User', '$state', '$timeout'];
function authenticate ($q, user, $state, $timeout) {
  if (user.isAuthenticated()) {
    return $q.resolve();
  } else {
    $timeout(function () {
      // TODO: no need in timeout?
      $state.go('login');
    });
    return $q.reject();
  }
}

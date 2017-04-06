class LoginController {
  constructor ($http, User, $location, $timeout) {
    this.email = '1234@123.ru';
    this.password = '112345yg';
    this.$http = $http;
    this.User = User;
    this.$location = $location;
    this.$timeout = $timeout;
  }

  logIn () {
    return this.User.logIn(this.email, this.password)
      .then(f => {
        this.$timeout(() => {
          this.$location.path('/');
        }, 1000);
      });
  }
}

export default LoginController;

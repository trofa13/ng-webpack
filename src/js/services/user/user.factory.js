let UserFactory = function ($http) {
  const user = {};

  let logIn = (email, password) => {
    return $http.post('http://lab.ovg.me/contact_book/api/login', {
      email,
      password
    })
      .then(data => {
        sessionStorage.setItem('token', data.data.token);
        return data;
      });
  };

  let getUser = () => {
    return user;
  };

  let isAuthenticated = () => {
    return !!sessionStorage.getItem('token');
  };

  return { getUser, isAuthenticated, logIn };
};

UserFactory.$inject = ['$http'];
export default UserFactory;

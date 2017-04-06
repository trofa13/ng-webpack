let AuthInterceptor = function ($q, $location) {
  let request = (config) => {
    var token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  };

  let responseError = (error) => {
    if (error.status === 401) {
      // No Access
      sessionStorage.removeItem('token');
      $location.path('/login');
    } else {
      return $q.reject(error);
    }
  };

  return { request, responseError };
};
AuthInterceptor.$inject = ['$q', '$location'];
export default AuthInterceptor;

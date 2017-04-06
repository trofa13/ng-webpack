let AuthInterceptor = function ($q) {
  let request = (config) => {
    var token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  };

  let responseError = (error) => {
    if (error.status === 403) {
      sessionStorage.removeItem('token');
    } else {
      return $q.reject(error);
    }
  };

  return { request, responseError };
};
AuthInterceptor.$inject = ['$q'];
export default AuthInterceptor;

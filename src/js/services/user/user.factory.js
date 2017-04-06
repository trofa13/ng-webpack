let UserFactory = function () {
  const user = {};

  let getUser = () => {
    return user;
  };

  let isSignedIn = () => {
    return user.isSignedIn;
  };

  let isAuthenticated = () => {
    return false;
  };

  return { getUser, isSignedIn, isAuthenticated };
};

export default UserFactory;

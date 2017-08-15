function SessionService() {
  'ngInject';

  const vm = this;

  // Instantiate data when service
  // is loaded
  vm._user = JSON.parse(localStorage.getItem('session.user'));
  vm._accessToken = JSON.parse(localStorage.getItem('session.accessToken'));

  vm.getUser = () => {
    return vm._user;
  };

  vm.setUser = (user) => {
    vm._user = user;
    localStorage.setItem('session.user', JSON.stringify(user));
    return vm;
  };

  vm.getAccessToken = () => {
    return vm._accessToken;
  };

  vm.setAccessToken = (token) => {
    vm._accessToken = token;
    localStorage.setItem('session.accessToken', JSON.stringify(token));
    return vm;
  };

  /**
   * Destroy session
   */
  vm.destroy = () => {
    vm.setUser(null);
    vm.setAccessToken(null);
  };

}

export default {
  name: 'SessionService',
  fn: SessionService
};

function AuthService(SessionService, AppSettings, $resource) {
  'ngInject';

  const service = {};

  service.isLoggedIn = function() {
    return SessionService.getUser() !== null;
  };

  service.login = () => {
    let resource = $resource(AppSettings.loginUrl, null, {
      create: {
        method: 'POST'
      }
    });
    return resource;
  }
  
  return service;

}

export default {
  name: 'AuthService',
  fn: AuthService
};

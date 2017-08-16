function BeersService(SessionService, AppSettings, $resource) {
  'ngInject';

  const service = {};

  service.isLoggedIn = function() {
    return SessionService.getUser() !== null;
  };

  service.api = () => {
    let resource = $resource(AppSettings.beersUrl + '/beers?hasLabels=y&withBreweries=y&order=availableId&key=2461ffcfbdbc918a9d1a37ed7ece4f6c&format=json', {}, {
      query: {
        isArray: false,
        method: 'GET',
        params: {}
      }
    });
    return resource;
  }

  return service;

}

export default {
  name: 'BeersService',
  fn: BeersService
};

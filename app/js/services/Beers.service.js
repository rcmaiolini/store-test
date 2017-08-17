function BeersService(SessionService, AppSettings, $resource) {
  'ngInject';

  const service = {};
  const key = '2461ffcfbdbc918a9d1a37ed7ece4f6c';

  service.beers = () => {
    let resource = $resource(AppSettings.beersUrl + '/beers?hasLabels=y&withBreweries=y&order=availableId&key=' + key + '&format=json', {}, {
      query: {
        isArray: false,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    });
    return resource;
  }

  service.beer = () => {
    let resource = $resource(AppSettings.beersUrl + '/beer/:id?key=' + key + '&format=json', {id: '@id'}, {
      get: {
        isArray: false,
        method: 'GET',
        params: {
          id: '@id'
        }
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

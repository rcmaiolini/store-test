const ResponseInterceptor = function(SessionService) {
  'ngInject';

  return {
    request: function(config){
      let token = SessionService.getAccessToken();
      config.headers['Authorization'] = 'Basic ' + token;
      return config;
    }
  }

}

export default {
  name: 'ResponseInterceptor',
  fn: ResponseInterceptor
};

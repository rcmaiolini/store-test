function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('home', {
    abstract: true,
    url: '/',
    templateUrl: 'home.html',
    controller: 'HomeController as vm'
  })
  .state('home.products', {
    url: 'products',
    templateUrl: 'pages/products.html',
    controller: 'ProductsController as vm'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'login.html',
    controller: 'LoginController as vm'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

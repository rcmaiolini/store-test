function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push('ResponseInterceptor');

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
    controller: 'ProductsController as vm',
    title: 'Produtos'
  })
  .state('home.mycart', {
    url: 'my-cart',
    templateUrl: 'pages/my-cart.html',
    controller: 'MycartController as vm',
    title: 'My Cart'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'login.html',
    controller: 'LoginController as vm',
    title: 'Login'
  });

  $urlRouterProvider.otherwise('/login');

}

export default OnConfig;

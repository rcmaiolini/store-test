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
  .state('home.beers', {
    url: 'beers',
    templateUrl: 'pages/beers.html',
    controller: 'BeersController as vm',
    title: 'Discover Beers'
  })
  .state('home.beerdetails', {
    url: 'beer-details/:id',
    templateUrl: 'pages/beer-details.html',
    controller: 'BeerdetailsController as vm',
    title: 'Beer Details'
  })
  .state('home.mycart', {
    url: 'my-cart',
    templateUrl: 'pages/my-cart.html',
    controller: 'MycartController as vm',
    title: 'Meu Carrinho'
  })
  .state('home.checkout', {
    url: 'checkout',
    templateUrl: 'pages/checkout.html',
    controller: 'CheckoutController as vm',
    title: 'Finalizar Pedido'
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

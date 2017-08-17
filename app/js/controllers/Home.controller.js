function HomeController(AuthService, SessionService, $location, AppSettings, $state) {
  'ngInject';

  const vm = this;

  vm.title = AppSettings.appTitle;
  vm.subTitle = AppSettings.subTitle;
  vm.username = SessionService.getUser();

  vm.currentPath = function(){
    return $state.current.url;
  };

  vm.logout = function(){
    SessionService.destroy();
    $location.path('/login');
  }
}

export default {
  name: 'HomeController',
  fn: HomeController
};

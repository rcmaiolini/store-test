function HomeController(AuthService, SessionService, $location, AppSettings) {
  'ngInject';

  const vm = this;

  vm.title = AppSettings.appTitle;
  vm.subTitle = AppSettings.subTitle;
  vm.username = SessionService.getUser();

  vm.logout = function(){
    SessionService.destroy();
    $location.path('/login');
  }

}

export default {
  name: 'HomeController',
  fn: HomeController
};

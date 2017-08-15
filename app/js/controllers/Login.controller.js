function LoginController(AuthService, $location, SessionService, AppSettings) {
  'ngInject';

  const vm = this;
  vm.appTitle = AppSettings.appTitle;
  vm.subTitle = AppSettings.subTitle;
  vm.title = 'Login';
  vm.errorUserPass = 'Usuario ou senha incorretos.'
  vm.errorUser = 'Preencha o campo usuário.';
  vm.errorPass = 'Preencha o campo senha.';

  vm.login = () => {
    vm.dataLoading = true;
    AuthService.login().create({username: vm.username, password: vm.password},
      (response) => {
        if(response.token){
          SessionService.setUser(response.username);
          SessionService.setAccessToken(response.token);
          $location.path('/products');
        } else {
          vm.error = vm.errorUserPass;
          vm.dataLoading = false;
        }
      });
  }

}

export default {
  name: 'LoginController',
  fn: LoginController
};

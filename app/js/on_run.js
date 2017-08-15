function OnRun($rootScope, AuthService, $location, AppSettings) {
  'ngInject';

  $rootScope.$on('$locationChangeStart', () => {
      let publicPages = ['/login'];
      let restrictedPage = publicPages.indexOf($location.path()) === -1;
      if (restrictedPage && !AuthService.isLoggedIn()) {
          $location.path('/login');
      }

      setTimeout(function(){
        $location.path('/login');
        SessionService.destroy();
      }, 86400000);
  });

  // change page title based on state
  $rootScope.$on('$locationChangeStart', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle + ' - ' + AppSettings.subTitle;
  });

}

  export default OnRun;

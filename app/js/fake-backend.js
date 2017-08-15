// setup fake backend for backend-less development
function setupFakeBackend($httpBackend) {
    'ngInject';

    var testUser = { username: 'ricardomaiolini', password: '1234', firstName: 'Ricardo', lastName: 'Maiolini' };
    var privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';

    // fake authenticate api end point
    $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
        // get parameters from post request
        var params = angular.fromJson(data);

        // check user credentials and return fake jwt token if valid
        if (params.username === testUser.username && params.password === testUser.password) {
            return [200, { token: privateKey, username: testUser.username, name: testUser.firstName + ' ' + testUser.lastName }, {}];
        } else {
            return [200, {}, {}];
        }
    });

    // pass through any urls not handled above so static files are served correctly
    $httpBackend.whenGET(/^\w+.*/).passThrough();
}

export default setupFakeBackend;

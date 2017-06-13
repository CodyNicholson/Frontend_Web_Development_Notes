describe('Did you create a new service named forecast?', function() {
    var ctrl, scope, service;

    beforeEach(module('ForecastApp'));

    it('Did you create a new service named forecast?', function() {
        inject(function($controller, $rootScope, forecast) {
            expect(forecast).toBeDefined();
        });
    });
});

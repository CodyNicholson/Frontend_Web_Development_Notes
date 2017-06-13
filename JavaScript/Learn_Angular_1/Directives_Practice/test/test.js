describe('directives', function(){

    beforeEach(module('AppMarketApp'));
    beforeEach(module('js/directives/installApp.html'));

    beforeEach(inject(function($rootScope, $compile, $injector) {
        elm = angular.element("<install-app></install-app>");

        scope = $rootScope;

        $compile(elm)(scope);
        scope.$digest();
    }));

    it('Did you create a new directive named installApp?', inject(function($controller) {
        expect(elm.hasClass('ng-isolate-scope')).toBeTruthy();
    }));

});

var Montage = require("montage").Montage;
var TestPageLoader = require("montage-testing/testpageloader").TestPageLoader;

TestPageLoader.queueTest("tabs-test", function(testPage) {

    describe("test/ui/tabs/tabs-spec", function() {
        it("should load", function() {
            expect(testPage.loaded).toBe(true);
        });

        describe("Tabs", function() {
            it("can be created", function() {
                expect(testPage.test.tabs).toBeDefined();
            });
        });
    });
});

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/test.js'], 
    capabilities: {
      browserName: 'chrome',
  
      chromeOptions: {
         args: [ "--window-size=1920,1024" ]
       }
    },
    framework: 'jasmine2',
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
    }
} 
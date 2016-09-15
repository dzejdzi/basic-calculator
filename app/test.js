var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var Reporter = require('jasmine-terminal-reporter');
var reporter = new Reporter();


jasmine.loadConfigFile('spec/support/jasmine.json');
/*jasmine.configureDefaultReporter({
    showColors: false
});
*/

jasmine.addReporter(reporter);
// jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

jasmine.execute();


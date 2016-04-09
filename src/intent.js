var Rx = require('rx');
var Keys = require('./keys');

// need all the ways appState can change here
var intentSubject = new Rx.ReplaySubject(1);
var Intent = {
  subject: intentSubject,

  completeTest: function (id, testPassed = false) {
    console.log("__________COMPLETE TEST", id, testPassed);
    //error checking for passed or failed
    intentSubject.onNext({
      key: Keys.TEST_COMPLETE,
      id: id,
      passed: testPassed
    });
  },

  startAllTests: function () {
    console.log("START ALL TESTS");
    //add running
    intentSubject.onNext({
      key: Keys.TESTS_START_ALL
    });
  },
};

module.exports = Intent;

let Rx = require('rx');
let Keys = require('./keys');
let Intent = require('./intent');
import defaultAppState from './appState';
let subject = new Rx.ReplaySubject(1);

let state = defaultAppState;

//impure
function startAllTests() {
  state.tests.forEach( (test) => {
    test.run();
  })
}

function completeTest(id, testPassed) {
  console.log()
  let completeOneTest = (test) => {
    if (test.id === id) {
      test.state = testPassed ? Keys.TEST_PASSED : Keys.TEST_FAILED
    }
  };

  let tests = state.tests;
  console.log('tests :', tests, id);
  tests = tests.map(completeOneTest);
  // console.log('tests after Map:', tests);

  state = Object.assign(
    {},
    state,
    {tests: tests},
  );

  subject.onNext(state);
}

Intent.subject.subscribe(function (payload) {
  console.log("EVENT:", payload);
  console.log("EVENT:", payload.key);
  switch(payload.key) {
    case Keys.TESTS_START_ALL:
      startAllTests();
      break;
    case Keys.TEST_COMPLETE:
      console.log("inside model - test complete  switch:", payload);
      completeTest(
        payload.id,
        payload.passed
      );
      break;
    default:
      console.warn(`${payload.key} not recognized in model.`);
  }
});

subject.onNext(state);

console.log("model loading complete:", state.tests);

export default {
  subject: subject
};

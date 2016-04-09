import testFactory from './helper/testFactory';
import keys from './keys';
import Intent from './intent';
let generateDummyTest = testFactory.generateDummyTest;

let __testIdCounter = 0;

//callback should accept testPassed
//should move into a helper function
function _createNewTest(defaultTest) {
  let { description } = defaultTest;
  let id = __testIdCounter++;

  let runFunc = generateDummyTest(id, Intent.completeTest); 

  let newTest = Object.assign({}, {
    description: defaultTest.description,
    id: id,
    run : runFunc,
    state: keys.TEST_NOT_STARTED
  });

  return newTest;
}

let defaultTests = [
  { description: "commas are rotated properly"},
  { description: "exclamation points stand up straight"},
  { description: "run-on sentences don't run forever"},
  { description: "question marks curl down, not up"},
  { description: "semicolons are adequately waterproof"},
  { description: "capital letters can do yoga"}
];

let tests = defaultTests.map( (defaultTest) => {
  return _createNewTest(defaultTest);
}) ;

console.log(tests);

module.exports = {
  tests
}
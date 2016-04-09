var keyMirror = require('keymirror');

module.exports = keyMirror({
  TEST_NOT_STARTED: null,
  TEST_START: null,
  TEST_COMPLTE: null,
  TEST_RUNNING: null,
  TEST_PASSED: null,
  TEST_FAILED: null,
  TESTS_START_ALL: null,
  TESTS_ALL_COMPLETE: null, //needed?
  TESTS_ALL_NOT_STARTED: null, //needed?
});

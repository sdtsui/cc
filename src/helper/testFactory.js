function generateDummyTest(id, callback) {
  let delay = 500 + Math.random() * 500;
  let testPassed = Math.random() > 0.5;

  console.log("in generate", delay, testPassed);

  return function() {
    setTimeout(function() {
      console.log("TEST COMPLETE : ", delay, testPassed, callback);
      callback(id, testPassed);
    }, delay);
  }.bind(null, callback);
}

module.exports = {
  generateDummyTest
}
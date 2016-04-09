# nri-take-home: Dan Tsui

*Scratchpad: implementation details go here*

## overall: 
- prioritize maintainability
- prioritize implementation details and thought process over complete solution

## potential edge cases / problems :
- tests never finishing (covered by the timeout), tests completing multiple times, 
- randomized tests to run. don't have to worry about async. Otherwise would need another thread to run them all simultaneously. for many tests, might want to use web workers.
- implementing in a manner that makes it easy to clear state, regenerate the tests, and run them again


## data layer: 

#### app state atom : 
  {
    tests : [singleTest]
  }
#### singleTest:
  { 
    description: str ,
    run:  function that runs test, // not ideal to place this on state
    status: use state keys here ['NOT_STARTED', etc]    
  }
#### possible states: 
  - not started, passed ,failed, running
  - Is it ideal that app state atom holds *only* the tests, and no other props? Discover while implementing!

#### ways that state can change:
  - testsRunning: defaults to false
    *startTests, stopTests*
  - testsComplete: defaults to false // this isn't necessary -> simply map over all the tests instead of needing a new event
    testsDone // unnecessary! 
  - tests:
    *completeTest(passedBool, idNum)*

    /\ draft

    \/ revised: test state is all that matters. react can state to props. 
    - need a way to start test
    - need a way to complete a test
    - need a way to check if all tests are complete, and do something if so
    - need a way to check if all tests are not-started (at beginning), and enable a button if so (does it make sense to default to disabled?)


## UI:
Acceptance Criteria : how UI will work

- The current status of each test (Not Started Yet, Running, Passed, or Failed) 
  : each testItem will have an id and look up status
- How many total tests have passed so far : 
  - class getter, maps over test.status in appState.tests, use "PASSED" key
- How many total tests have failed so far : 
  - class getter, maps over test.status in appState.tests, use "FAILED" key
- How many total tests are still running : 
  - class getter, maps over test.status in appState.tests, use "RUNNING" key
- An indication (e.g. "FINISHED!") when all tests have completed running : 
  - class getter, map over test.status in appState.tests
  - prop returns true when all no tests "NOT_STARTED" or "RUNNING" (`!_.every`)
- Initially each test is in the Not Started Yet state, the user must press a button to start them running.
  - button -> Intent.startAllTests()
    - invokes test.run for all tests


#### additional possible states and getters:
  - Whether all of the tests are "NOT_STARTED", needed for enabled/disabled state of button  : 
    - class getter, maps over test.status in appState.tests, look for NOT_STARTED key
    - if every test has NOT_STARTED, return true

#### 
design for react component heirarchy : 
- header : has button, only needs "all tests not started" prop; also makes visible an "all finished" notification
  props needed: see testList
- testList
  props needed:
    - all complete, for "FINISHED!!!" notification
    - non-complete, for button
  - testItem
    props needed:
      - text from test.description
      - state from test.status

notes @ 2:02
- omg. fun.
- much incomplete.
- thanks!
// JavaScripts goes here.
import React, { Component, PropTypes } from 'react'
// import Header from './Header'
// import TestList from './TestList'
// import TestItem from './TestItem'
import Intent from '../intent'

class App extends Component {
  render() {
    // const { Intent } = this.props;

    return (
      <div>
        <button>Run all Tests</button>
      </div>
    )
  }
}

App.propTypes = {
  allComplete: PropTypes.bool.isRequired,
  allNotComplete: PropTypes.bool.isRequired
}

export default App;

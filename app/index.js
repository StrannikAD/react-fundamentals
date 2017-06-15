var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI


// Component Definition
class App extends React.Component {
  render() {
    return (
      <div>Hello React Training!</div>
    )
  }
}

// Invokes the Component
// <App />

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
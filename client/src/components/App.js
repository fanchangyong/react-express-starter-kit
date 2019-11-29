import React from 'react';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    axios.get('/api/ping')
  }

  render() {
    return (
      <h1 style={{ textAlign: 'center' }}>
        Hello React
      </h1>
    );
  }
}

export default App;

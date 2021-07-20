import React, { Component } from 'react';
import loading from './loading.gif';
class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          src={loading}
          alt="Loading..."
          style={{ width: '200px', display: 'block', margin: 'auto' }}
        />
      </React.Fragment>
    );
  }
}

export default Loading;

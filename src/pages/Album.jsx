import React, { Component } from 'react';

export default class Album extends Component {
  render() {
    return (
      <div data-testid="page-album">
        <h1 style={ { backgroundColor: '#35D285' } }>Album</h1>
      </div>
    );
  }
}

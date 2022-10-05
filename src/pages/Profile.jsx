import React, { Component } from 'react';
import Header from '../componentes/Header';
import Loading from '../componentes/Loading';

export default class Profile extends Component {
  constructor() {
    super();
    this.isThisPageLoading = this.isThisPageLoading.bind(this);
    this.state = {
      isLoading: true,
    };
  }

  isThisPageLoading(theChildComponentIsLoading) {
    this.setState({ isLoading: theChildComponentIsLoading });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <div data-testid="page-profile">
          <Header isThisPageLoading={ this.isThisPageLoading } />
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="page-profile">
        <Header isThisPageLoading={ this.isThisPageLoading } />
        <h1 style={ { backgroundColor: '#35ACD2' } }>Profile</h1>

      </div>
    );
  }
}

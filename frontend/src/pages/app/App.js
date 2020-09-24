import React, { Component } from 'react';
import PageHeader from '../../commons/component/index';
import './App.css';
import {Provider} from 'react-redux';
import Store from '../../store/Store';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  closeMenu() {
    this.setState({
      isOpen: false,
    });
  }

  toggle() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Provider store={Store}>
      <div className="App">
        <PageHeader
          isOpen={isOpen}
          toggleMenu={() => this.toggle()}
        />
        <div className="App-screen" onClick={() => this.closeMenu()}>
          {this.props.children}
        </div>
      </div>
      </Provider>
    );
  }
}

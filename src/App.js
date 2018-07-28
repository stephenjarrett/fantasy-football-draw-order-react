import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './Countdown';
import Draftorder from './Draftorder';

class App extends Component {

  constructor(props) {
        super(props);

        this.state = {
            members: [
              'Stephen',
              'Bick',
              'Ashtits',
              'Chavez',
              'Tyb',
              'Ronbob',
              'JW',
              'Zware77',
              'Kelton',
              'Tony',
              'Chad',
              'Blake'
            ],
            count: 60
        };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Football Draw Order</h1>
        </header>
          <Countdown className="countdown" count={this.state.count} />

          <Draftorder className="draft-order" count={this.state.count} members={this.state.members} />
      </div>
    );
  }
  
  componentDidMount() {
      setInterval(this._theFinalCountdown, 100);
  }

  
  _theFinalCountdown = () => {
    if (this.state.count > 0) {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount
      })
    }
  }


}

export default App;

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
            count: 30,
            inputValue: ''
        };
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fantasy Football Draw Order</h1>
        </header>

          <div className="form">
            <div className="form1">
                  <form className="form1" onSubmit={event => { this._addMember(event)} }>
                      <input type="text" value={this.state.inputValue} placeholder="Enter Name" onChange={e => {this._handleChange(e)}} ></input>
                      <button type="submit" value="Submit">
                          Submit
                      </button>
                  </form>
                  <button onClick={this._randomize}>Randomize</button>
            </div>      
          </div>


          <Countdown className="countdown" addMember={this._addMember} randomize={this._randomize} count={this.state.count} />
          <Draftorder className="draft-order" count={this.state.count} members={this.state.members} doClick={this._deleteMember} />
      </div>
    );
  }
  
  
  _theFinalCountdown = () => {
    if (this.state.count > 0) {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount
      });
    }
  }

  _randomize = () => {
    setInterval(this._theFinalCountdown, 1000);
  }

  _addMember = (event) => {
    event.preventDefault();
    let newMember = this.state.inputValue;
    let newMemberArray = this.state.members.slice().concat(newMember);
    this.setState({
      members: newMemberArray
    });
    this.setState({
      inputValue: ''
    })
  }

  _handleChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  _deleteMember = (theMember) => {
    let newMemberArray = this.state.members.filter((member) => {
      return member !== theMember;
    })

    this.setState({
      members: newMemberArray
    })
  }

  _deleteCounterByID = (theID) => {
    let newCounterArray = this.state.counterValues.filter((obj) => {
      return obj.id !== theID;
    });

    this.setState({
      counterValues: newCounterArray
    })
  }

}

export default App;

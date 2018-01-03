import React, { Component } from 'react';
import TicTacToe from '@zeoxyman/tictactoe-react';
import SlidePuzzle from '@zeoxyman/slide-puzzle-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TicTacToe />
        <SlidePuzzle />
      </div>
    );
  }
}

export default App;

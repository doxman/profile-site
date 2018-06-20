import React, { Component } from 'react';
import TicTacToe from '@zeoxyman/tictactoe-react';
import SlidePuzzle from '@zeoxyman/slide-puzzle-react';
import RisingSunPuzzle from '@zeoxyman/rising-sun-puzzle-component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TicTacToe />
        <SlidePuzzle />
        <RisingSunPuzzle />
      </div>
    );
  }
}

export default App;

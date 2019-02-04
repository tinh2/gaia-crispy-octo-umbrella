import React, { Component } from 'react';
import './App.css';
import SeriesForm from './components/SeriesForm';
import SeriesData from './components/SeriesData';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
          <SeriesForm/>
          <SeriesData/>
        </div>
      </div>
    );
  }
}

export default App;

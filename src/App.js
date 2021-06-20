import React, { Component } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer'
import Tree from './components/Tree'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fun With File Trees</h1>
        </header>
        <div className="App-intro">
          <Tree />
        </div>
      </div>
    );
  }
 
}

export default App;

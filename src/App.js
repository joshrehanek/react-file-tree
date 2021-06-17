import React, { Component } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer'
import TreeNode from './components/TreeNode'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fun With File Trees</h1>
        </header>
        <div className="App-intro">
          <TreeNode />
        </div>
      </div>
    );
  }
 
}

export default App;

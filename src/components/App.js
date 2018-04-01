import React from 'react';
import './App.css';
import Exchange from '../containers/Exchange'

const App = ({data}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">{data.title}</h1>
      </header>
      <Exchange />
    </div>
  );
  
}

export default App;

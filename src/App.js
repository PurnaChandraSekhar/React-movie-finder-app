import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';

import Card from './components/Card';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      <SearchBar />
    </div>
    <Card />
    
    </>
  );
}

export default App;

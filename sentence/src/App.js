import React, { Component } from 'react';
import Sentence from './components/Sentence/Sentence.js'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <Sentence
        sentences={[
            'Pierwsza sentencja',
            'Druga sentencja',
            'Trzecia sentencja',
            'Czwarta sentencja'
            ]}
        time={100}    
        />
    );
  }
}

export default App;

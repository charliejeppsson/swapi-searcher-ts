import React, { useState } from 'react';
import './App.scss';
import { Character } from './types/types';

const App: React.FC = () => {
  const [favCharacters, setFavCharacters] = useState<Character[]>([]);
  return (
    <div className="App__container">
    </div>
  );
}

export default App;

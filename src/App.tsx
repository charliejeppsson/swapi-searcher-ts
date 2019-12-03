import React, { useState } from 'react';
import './App.scss';
import SearchHome from './components/SearchHome/SearchHome';
import FavCharactersList from './components/FavCharactersList/FavCharactersList';
import {
  FavCharactersContext,
  FavCharactersContextType,
} from './contexts/FavCharactersContext';
import { Character } from './types/types';

const App: React.FC = () => {
  const [favCharacters, setFavCharacters] = useState<Character[]>([]);

  const addFavCharacter = (charToAdd: Character) => {
    setFavCharacters([...favCharacters, charToAdd]);
  }

  const removeFavCharacter = (charToRemove: Character) => {
    const updatedList = favCharacters.filter(character => (
      character.id !== charToRemove.id
    ));
    setFavCharacters(updatedList);
  }

  const InitialFavCharactersContext: FavCharactersContextType = {
    favCharacters,
    addFavCharacter: (character: Character) => addFavCharacter(character),
    removeFavCharacter: (character: Character) => removeFavCharacter(character)
  }

  return (
    <div className="App__container">
      <FavCharactersContext.Provider value={InitialFavCharactersContext}>
        <SearchHome />
        <FavCharactersList />
      </FavCharactersContext.Provider>
    </div>
  );
}

export default App;

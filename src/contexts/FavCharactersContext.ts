import { createContext } from 'react';
import { Character } from '../types/types';

export type FavCharactersContextType = {
  favCharacters: Character[],
  addFavCharacter: (character: Character) => void,
  removeFavCharacter: (character: Character) => void,
}

const defaultCharactersContext = {
  favCharacters: [],
  addFavCharacter: () => {},
  removeFavCharacter: () => {},
}

export const FavCharactersContext = createContext<FavCharactersContextType>(
  defaultCharactersContext
);

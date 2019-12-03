import React, { useContext } from 'react';
import './FavCharactersList.scss';
import {
  FavCharactersContext,
  FavCharactersContextType,
} from '../../contexts/FavCharactersContext';
import FavCharactersListItem from '../FavCharactersListItem/FavCharactersListItem';
import { Character } from '../../types/types';

export default function FavCharactersList() {
  const { favCharacters } = useContext<FavCharactersContextType>(FavCharactersContext);

  const renderFavCharacters = (favCharacters: Character[]) => {
    return favCharacters.map(character => (
      <FavCharactersListItem key={character.id} character={character} />
    ))
  }

  return (
    <div className="FavCharactersList">
      <h2>My all-time favorites</h2>
      <ul>
        {
          favCharacters.length ?
            renderFavCharacters(favCharacters)
            : <p>No characters selected yet.</p>
        }
      </ul>
    </div>
  );
}

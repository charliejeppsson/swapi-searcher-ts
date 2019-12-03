import React, { useContext, MouseEvent } from 'react';
import {
  FavCharactersContext,
  FavCharactersContextType
} from '../../contexts/FavCharactersContext';
import { Character } from '../../types/types';
import './SearchResultsListItem.scss';

type SearchItemProps = {
  key: number,
  character: Character,
}

export default function SearchResultsListItem(props: SearchItemProps) {
  const { character } = props;
  const { addFavCharacter, favCharacters } = useContext<FavCharactersContextType>(
    FavCharactersContext
  );

  const addCharacterToList = (event: MouseEvent, character: Character) => {
    event.preventDefault();
    addFavCharacter(character);
  }

  const charAlreadyAdded = (character: Character): boolean => {
    const foundChar = favCharacters.find(char => char.id === character.id);
    return foundChar !== undefined;
  }

  return (
    <li className="SearchResultsListItem">
      <p>{character.name}</p>
      {
        !charAlreadyAdded(character) &&
          <button onClick={(event) => addCharacterToList(event, character)}>
            Add
          </button>
      }
    </li>
  );
}

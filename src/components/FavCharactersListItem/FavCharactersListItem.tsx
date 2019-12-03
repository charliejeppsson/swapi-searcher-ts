import React, { useContext, MouseEvent } from 'react';
import {
  FavCharactersContext,
  FavCharactersContextType,
} from '../../contexts/FavCharactersContext';
import { Character } from '../../types/types';
import './FavCharactersListItem.scss';

type FavItemProps = {
  key: number,
  character: Character,
}

export default function FavCharactersListItem(props: FavItemProps) {
  const { character } = props;
  const { removeFavCharacter } = useContext<FavCharactersContextType>(
    FavCharactersContext
  );

  const removeCharacterFromList = (event: MouseEvent, character: Character) => {
    event.preventDefault();
    removeFavCharacter(character);
  }

  return (
    <li className="FavCharactersListItem">
      <p>{character.name}</p>
      <button onClick={(event) => removeCharacterFromList(event, character)}>
        Remove
      </button>
    </li>
  );
}

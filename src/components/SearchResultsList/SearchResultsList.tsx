import React from 'react';
import SearchResultsListItem from '../SearchResultsListItem/SearchResultsListItem';
import { Character } from '../../types/types';
import './SearchResultsList.scss';

type SearchResultsProps = {
  loading: boolean,
  searchResults: Character[],
}

export default function SearchResultsList(props: SearchResultsProps) {
  const { loading, searchResults } = props;

  const renderSearchResults = (searchResults: Character[]) => {
    return searchResults.map(character => (
      <SearchResultsListItem key={character.id} character={character} />
    ))
  }

  if (loading) {
    return <p>Searching...</p>
  }

  return (
    <ul className="SearchResultsList">
      {renderSearchResults(searchResults)}
    </ul>
  );
}

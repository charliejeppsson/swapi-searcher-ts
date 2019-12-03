import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import useDebounce from '../../utils/hooks/useDebounce';
import searchCharacters from '../../api/searchCharacters';
import './SearchHome.scss';
import { Character } from '../../types/types';

function SearchHome() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters({
        searchTerm: debouncedSearchTerm,
        setLoading,
        setSearchResults,
      });
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="SearchHome">
      <h2>Search Star Wars characters</h2>
        <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <SearchResultsList loading={loading} searchResults={searchResults} />
    </div>
  );
}

export default SearchHome;

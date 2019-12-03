import React from 'react';
import './SearchForm.scss';

type SearchFormProps = {
  searchTerm: string,
  setSearchTerm: (newSearchTerm: string) => void,
}

export default function SearchForm(props: SearchFormProps) {
  const { searchTerm, setSearchTerm } = props;

  return (
    <form className="SearchForm">
      <input
        type="search"
        className="SearchInput"
        placeholder="E.g. Chewbacca"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
}

import axios from 'axios';
import { Character } from '../types/types';

type SearchProps = {
  searchTerm: string,
  setLoading: (loading: boolean) => void,
  setSearchResults: (newSearchResults: Character[]) => void,
}

type RawCharacter = {
  url: string,
  name: string,
}

export default async (props: SearchProps) => {
  const { searchTerm, setLoading, setSearchResults } = props;

  setLoading(true);
  try {
    const response = await axios.get('https://swapi.co/api/people', {
      params: { search: searchTerm }
    });
const newSearchResults = response.data.results.map((character: RawCharacter) => (
      {
        id: character.url.slice(28, -1),
        name: character.name
      }
    ));
    setSearchResults(newSearchResults);
  } catch (err) {
    console.log(err);
  }
  setLoading(false);
}

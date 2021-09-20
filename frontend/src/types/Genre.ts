import { Movie } from 'types';

type Genre = {
  id: number;
  slug: string;
  name: string;
  movies?: Movie[];
};

export default Genre;

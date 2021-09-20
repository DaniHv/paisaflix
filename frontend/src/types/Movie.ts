import Genre from './Genre';

type Movie = {
  id: number;
  name: string;
  genre: Genre;
  rating: number;
  duration: number;
  views: number;
  description: string;
  coverImage: string;
  trailerImage: string;
  trailerVideo: string;
};

export default Movie;

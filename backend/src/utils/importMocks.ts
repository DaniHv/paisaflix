import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import genres from '../mocks/genres.json';
import movies from '../mocks/movies.json';
import trailers from '../mocks/trailers.json';
import { Genre, Movie, Trailer } from '../entities';

(async () => {
  await createConnection();

  for (const genre of genres) {
    let genreEntity = new Genre();
    Object.assign(genreEntity, genre);
    await genreEntity.save();
  }

  for (const movie of movies) {
    let movieEntity = new Movie();
    Object.assign(movieEntity, movie);
    movieEntity.genre = await Genre.findOneOrFail({ slug: movie.genre });
    await movieEntity.save();
  }

  for (const trailer of trailers) {
    let trailerEntity = new Trailer();
    Object.assign(trailerEntity, trailer);
    await trailerEntity.save();
  }
})();

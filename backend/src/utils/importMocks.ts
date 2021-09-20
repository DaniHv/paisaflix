import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

import genres from '../mocks/genres.json';
import movies from '../mocks/movies.json';
import trailers from '../mocks/trailers.json';
import { Genre, Movie, Trailer } from '../entities';

(async () => {
  await createConnection();

  console.log(await Genre.find());

  await Promise.all(
    genres.map(async (genre: any) => {
      let genreEntity = new Genre();
      Object.assign(genreEntity, genre);
      await genreEntity.save();
    }),
  );

  await Promise.all(
    movies.map(async (movie: any) => {
      let movieEntity = new Movie();
      Object.assign(movieEntity, movie);
      movieEntity.genre = await Genre.findOneOrFail({ slug: movie.genre });
      await movieEntity.save();
    }),
  );

  await Promise.all(
    trailers.map(async (trailer: any) => {
      let trailerEntity = new Trailer();
      Object.assign(trailerEntity, trailer);
      await trailerEntity.save();
    }),
  );

  return;
})();

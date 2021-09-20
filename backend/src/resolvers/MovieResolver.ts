import { Resolver, Query, Int, Arg, Args } from 'type-graphql';

import { Movie } from '../entities';
import { EntitiesArgs } from '../schema/args';

@Resolver(Movie)
class MovieResolver {
  @Query(() => [Movie])
  async movies(@Args() { offset, limit }: EntitiesArgs) {
    const movies = await Movie.find({ skip: offset, take: limit });

    return movies;
  }

  @Query(() => Int)
  async moviesCount() {
    const count = Movie.count();

    return count;
  }

  @Query(() => [Movie])
  async premieres() {
    const movies = await Movie.find({ where: { isPremiere: true } });

    return movies;
  }

  @Query(() => Movie, { nullable: true })
  async movie(@Arg('id', () => Int) id: number) {
    const movie = await Movie.findOne({ where: { id } });

    return movie;
  }
}

export default MovieResolver;

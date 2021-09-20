import { Resolver, Query, Args } from 'type-graphql';

import { Trailer } from '../entities';
import { EntitiesArgs } from '../schema/args';

@Resolver(Trailer)
class TrailerResolver {
  @Query(() => [Trailer])
  async trailers(@Args() { offset, limit }: EntitiesArgs) {
    const trailers = await Trailer.find({ skip: offset, take: limit });

    return trailers;
  }
}

export default TrailerResolver;

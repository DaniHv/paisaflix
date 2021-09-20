import { Resolver, Query } from 'type-graphql';

import { User } from '../entities';

@Resolver(User)
class UserResolver {
  @Query(() => [User])
  async register() {
    const users = await User.find();

    return users;
  }
}

export default UserResolver;

import { ArgsType, Field, Int } from 'type-graphql';
import { Min, Max } from 'class-validator';

@ArgsType()
export class EntitiesArgs {
  // Pagination
  @Field(() => Int, { defaultValue: 0 })
  offset: number = 0;

  @Field(() => Int, { defaultValue: 10 })
  @Min(1)
  @Max(100)
  limit: number = 10;
}

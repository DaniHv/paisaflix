import { ObjectType, Field } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

import { Movie } from './index';

@ObjectType()
@Entity()
class Genre extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  slug: string;

  @Field()
  @Column()
  name: string;

  @Field(() => [Movie])
  @OneToMany(() => Movie, (movie) => movie.genre)
  movies: Movie[];
}

export default Genre;

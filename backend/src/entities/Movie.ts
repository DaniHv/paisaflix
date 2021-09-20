import { ObjectType, Field } from 'type-graphql';
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';

import { Genre } from './index';

@ObjectType()
@Entity()
class Movie extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => Genre)
  @ManyToOne(() => Genre, (genre) => genre.movies, { eager: true })
  genre!: Genre;

  @Field()
  @Column()
  duration!: number;

  @Field()
  @Column()
  rating!: number;

  @Field()
  @Column()
  views!: number;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  trailerVideo!: string;

  @Field()
  @Column()
  trailerImage!: string;

  @Field()
  @Column()
  coverImage!: string;

  @Field()
  @Column({ nullable: true })
  isPremiere: boolean = false;
}

export default Movie;

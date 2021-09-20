import { ObjectType, Field } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
class Trailer extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  video!: string;

  @Field()
  @Column()
  image!: string;
}

export default Trailer;

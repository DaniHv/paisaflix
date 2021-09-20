import type { FC } from 'react';

import { Section } from './styles';
import Container from 'components/UI/Container';
import MovieHero from 'components/Hero/MovieHero';

type HeroProps = {
  movie: any;
};

const Hero: FC<HeroProps> = ({ movie }) => (
  <Section>
    <Container>
      <MovieHero movie={movie} single />
    </Container>
  </Section>
);

export default Hero;

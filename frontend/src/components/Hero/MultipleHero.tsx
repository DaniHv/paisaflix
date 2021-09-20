import { FC, Fragment, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Section } from './styles';
import Container from 'components/UI/Container';
import MovieHero from 'components/Hero/MovieHero';

type HomeHeroProps = {
  movies: any[];
};

const HomeHero: FC<HomeHeroProps> = ({ movies, children }) => {
  const [currentMovie, setCurrentMovie] = useState<number>(1);

  const handleChangeMovie = () => {
    setCurrentMovie(movies.length - 1 > currentMovie ? currentMovie + 1 : 0);
  };

  useEffect(() => {
    setTimeout(handleChangeMovie, 10000);
  }, [currentMovie]);

  return (
    <Section>
      <Container>
        <AnimatePresence>
          {movies.map((movie, i) => (
            <Fragment key={i}>
              {movies[currentMovie].id == movie.id && (
                <MovieHero movie={movies[currentMovie]} />
              )}
            </Fragment>
          ))}
        </AnimatePresence>
      </Container>

      {children}
    </Section>
  );
};

export default HomeHero;

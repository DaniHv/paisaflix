import { FC, Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  AnimatePresence,
  AnimateSharedLayout,
  useAnimation,
} from 'framer-motion';

import { Movie } from 'types';
import Section from 'components/UI/Section';
import { MoviesGrid, MovieCard, MovieCardContent } from './styles';
import MovieModal from 'components/Movies/MovieModal';
import { Clock, Eye } from 'react-feather';
import { useLocale } from 'hooks';
import { Button, Center } from 'components/UI';

type FeaturedMoviesProps = {
  loading: boolean;
  movies: Movie[];
  loadMore?: (callback?: () => void) => void;
};

const FeaturedMovies: FC<FeaturedMoviesProps> = ({
  loading,
  movies,
  loadMore,
}) => {
  const [selectedMovie, setSelectedMovie] = useState<null | Movie>(null);
  const { inView, ref } = useInView();
  const animationControl = useAnimation();
  const { t } = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      animationControl.start('show');
    } else {
      animationControl.start('hidden');
    }
  }, [animationControl, inView, loading]);

  return (
    <Section title={t('featured_movies')} viewMore="/movies">
      <AnimateSharedLayout type="crossfade">
        <MoviesGrid
          variants={container}
          initial="hidden"
          animate={animationControl}
          ref={ref}
        >
          {loading && !movies
            ? [...Array(5)].map((item, i) => (
                <MovieCard
                  key={i}
                  variants={item}
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  skeleton={true}
                />
              ))
            : movies.map((movie) => (
                <AnimateSharedLayout type="crossfade" key={movie.id.toString()}>
                  <MovieCard
                    key={movie.id}
                    image={movie.coverImage}
                    layoutId={movie.id.toString()}
                    onClick={() => setSelectedMovie(movie)}
                    variants={item}
                    whileHover={{
                      scale: 1.025,
                    }}
                    whileTap={{
                      scale: 0.975,
                    }}
                  >
                    <MovieCardContent>
                      <span>{movie.genre.name}</span>
                      <div>
                        <ul>
                          <li>
                            <Clock size={18} />
                            {`${Math.floor(movie.duration / 60)} hr ${
                              movie.duration % 60
                            } mins`}
                          </li>
                          <li>
                            <Eye size={18} />{' '}
                            {`${movie.views / 1000}k ${t('movie_views')}`}
                          </li>
                        </ul>
                        <h3>{movie.name}</h3>
                      </div>
                    </MovieCardContent>
                  </MovieCard>

                  <AnimatePresence>
                    {selectedMovie?.id === movie.id && (
                      <MovieModal
                        movie={selectedMovie}
                        layoutId={movie.id.toString()}
                        onClose={() => setSelectedMovie(null)}
                      />
                    )}
                  </AnimatePresence>
                </AnimateSharedLayout>
              ))}
        </MoviesGrid>
      </AnimateSharedLayout>

      {loadMore && (
        <Center>
          <Button
            padding="lg"
            onClick={() => loadMore(() => animationControl.start('show'))}
            style={{ marginTop: '3rem' }}
          >
            {t('load_more')}
          </Button>
        </Center>
      )}
    </Section>
  );
};

export default FeaturedMovies;

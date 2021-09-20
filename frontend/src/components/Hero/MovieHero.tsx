import type { FC } from 'react';
import slugify from 'slugify';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Movie } from 'types';
import { useLocale } from 'hooks';
import {
  MovieHero as MovieHeroTag,
  MovieImage,
  MovieContent,
  SingleTrailer,
} from './styles';
import Rating from 'components/UI/Rating';
import Button from 'components/UI/Button';
import { TrailerCard } from 'components/Trailers';

type MovieHeroProps = {
  movie: Movie;
  single?: boolean;
};

const MovieHero: FC<MovieHeroProps> = ({ movie, single }) => {
  const { t } = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <MovieHeroTag
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MovieImage image={movie.coverImage} />

      <MovieContent variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item}>{movie.name}</motion.h1>
        <Rating rating={movie.rating} />
        <motion.p variants={item}>{movie.description}</motion.p>
        <motion.ul variants={item}>
          <li>
            {t('movie_genre')}: {movie.genre.name}
          </li>
          <li>
            {t('movie_duration')}: {Math.floor(movie.duration / 60)} hr{' '}
            {movie.duration % 60} mins
          </li>
          <li>
            {t('movie_rating')}: {movie.rating}/5
          </li>
        </motion.ul>
        <motion.div variants={item}>
          <Link href={`/watch/${movie.id}-${slugify(movie.name)}`} passHref>
            <Button isAnchor padding="lg">
              {t('movie_watchnow')}
            </Button>
          </Link>
        </motion.div>
      </MovieContent>

      {single && (
        <SingleTrailer variants={item}>
          <h2>Trailer</h2>
          <TrailerCard image={movie.trailerImage} />
        </SingleTrailer>
      )}
    </MovieHeroTag>
  );
};

export default MovieHero;

import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import slugify from 'slugify';
import Link from 'next/link';
import { BarChart, Clock, Eye, Volume2, VolumeX } from 'react-feather';

import { Movie } from 'types';
import { useLocale } from 'hooks';
import Modal, { ModalProps } from 'components/UI/Modal';
import { ModalHeader, Overlay, ModalBody, MuteButton } from './styles';
import Rating from 'components/UI/Rating';
import InlineButton from 'components/UI/InlineButton';

type MovieModalProps = ModalProps & {
  movie: Movie;
};

const MovieModal: FC<MovieModalProps> = ({ movie, layoutId, onClose }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const { t } = useLocale();
  const router = useRouter();
  const movieUrl = `/movies/${movie.id}-${slugify(movie.name)}`;
  const videoRef = useRef(null);

  useEffect(() => {
    router.push(router.pathname, movieUrl, { shallow: true });

    return () => {
      router.push(router.pathname, null, { shallow: true });
    };
  }, [router.isReady]);

  useEffect(() => {
    // Needed to autoPlay in mobile devices - "autoPlay" attr doesn't work
    videoRef.current.play();
  }, []);

  return (
    <Modal layoutId={layoutId} onClose={onClose}>
      <ModalHeader>
        <video loop muted={isMuted} ref={videoRef}>
          <source src={movie.trailerVideo} type="video/mp4" />
          <img src={movie.trailerImage} alt={movie.name} title={movie.name} />
        </video>
        <span>{movie.genre.name}</span>
        <Overlay>
          <div>
            <div>
              <h3>{movie.name}</h3>
              <Rating rating={movie.rating} />
            </div>

            <MuteButton onClick={() => setIsMuted(!isMuted)}>
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </MuteButton>
          </div>
        </Overlay>
      </ModalHeader>
      <ModalBody>
        <ul>
          <li>
            <Clock />
            {t('movie_duration')}: {Math.floor(movie.duration / 60)} hr{' '}
            {movie.duration % 60} mins
          </li>
          <li>
            <BarChart />
            {t('movie_rating')}: {movie.rating}/5
          </li>
          <li>
            <Eye />
            {t('movie_views')}: {movie.views / 1000}k
          </li>
        </ul>
        <p>{movie.description}</p>

        <Link href={movieUrl} passHref>
          <InlineButton>{t('movie_watchnow')}</InlineButton>
        </Link>
      </ModalBody>
    </Modal>
  );
};

export default MovieModal;

import { NextPage } from 'next';
import { gql, useLazyQuery } from '@apollo/client';
import ReactNetflixPlayer from 'react-netflix-player';

import withAuthentication from 'hocs/withAuthentication';
import { movieFields } from 'schema/fragments';
import { Movie } from 'types';
import { Loading, Error, NotFound } from 'containers';
import { useEffect } from 'react';
import router from 'next/router';
import SEO from 'components/SEO';

const GET_MOVIE = gql`
  query ($id: Int!) {
    movie(id: $id) {
      ...movieFields
    }
  }

  ${movieFields}
`;

const WatchPage: NextPage = () => {
  const [getMovie, { called, loading, data, error }] =
    useLazyQuery<{ movie: Movie }>(GET_MOVIE);

  useEffect(() => {
    if (router.isReady) {
      if (typeof router.query.movie == 'string') {
        let [movieID] = router.query.movie.split('-');
        getMovie({ variables: { id: parseInt(movieID) } });
      } else {
        router.push('/404');
      }
    }
  }, [router.isReady]);

  if (!called || loading) return <Loading />;
  if (error) return <Error />;

  let movie = data.movie;
  if (!movie) return <NotFound />;

  return (
    <>
      <SEO title={movie.name} description={movie.description} />

      <ReactNetflixPlayer
        title={data.movie.name}
        src={data.movie.trailerVideo}
        playerLanguage="en"
        backButton
      />
    </>
  );
};

export default withAuthentication(WatchPage);

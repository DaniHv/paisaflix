import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { gql, useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';

import { Movie } from 'types';
import { movieFields } from 'schema/fragments';
import { Loading, Error, NotFound } from 'containers';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { SingleHero } from 'components/Hero';

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      ...movieFields
    }
  }

  ${movieFields}
`;

const MoviePage: NextPage = () => {
  const router = useRouter();
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

  const movie = data.movie;
  if (!movie) return <NotFound />;

  return (
    <Layout>
      <SEO title={movie.name} description={movie.description} />

      <SingleHero movie={movie} />
    </Layout>
  );
};

export default MoviePage;

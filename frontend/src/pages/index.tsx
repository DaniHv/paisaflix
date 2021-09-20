import type { GetStaticProps, NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';

import { movieFields, trailerFields } from 'schema/fragments';
import apolloClient from 'lib/apolloClient';
import { Movie, Trailer } from 'types';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { FeaturedMovies } from 'components/Movies';
import { MultipleHero } from 'components/Hero';
import FeaturedTrailers from 'components/Trailers/FeaturedTrailers';
import { useLocale } from 'hooks';

const GET_PREMIERE_MOVIES = gql`
  query {
    premieres {
      ...movieFields
    }
  }

  ${movieFields}
`;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_PREMIERE_MOVIES,
  });

  return {
    props: {
      premiereMovies: data.premieres,
    },
    revalidate: 3600,
  };
};

const GET_FEATURED_TRAILERS = gql`
  query ($limit: Int) {
    trailers(limit: $limit) {
      ...trailerFields
    }
  }

  ${trailerFields}
`;

const GET_FEATURED_MOVIES = gql`
  query ($limit: Int, $offset: Int) {
    movies(limit: $limit, offset: $offset) {
      ...movieFields
    }
    moviesCount
  }

  ${movieFields}
`;

type IndexPageProps = {
  premiereMovies: Movie[];
};

const IndexPage: NextPage<IndexPageProps> = ({ premiereMovies }) => {
  const featuredTrailers = useQuery<{ trailers: Trailer[] }>(
    GET_FEATURED_TRAILERS,
    { variables: { limit: 4 } },
  );
  const featuredMovies = useQuery<{ movies: Movie[]; moviesCount: number }>(
    GET_FEATURED_MOVIES,
    { variables: { limit: 5 } },
  );
  const { t } = useLocale();

  const handleFetchMovies = async (callback?: () => void) => {
    await featuredMovies.fetchMore({
      variables: {
        offset: featuredMovies.data.movies.length,
        limit: 6,
      },
    });

    callback?.();
  };

  return (
    <Layout>
      <SEO />
      <MultipleHero movies={premiereMovies}>
        {featuredTrailers.error ? (
          <p>{t('error_network')}</p>
        ) : (
          <FeaturedTrailers
            loading={featuredTrailers.loading}
            trailers={featuredTrailers.data?.trailers}
          />
        )}
      </MultipleHero>

      {featuredMovies.error ? (
        <p>{t('error_network')}</p>
      ) : (
        <FeaturedMovies
          loading={featuredMovies.loading}
          movies={featuredMovies.data?.movies}
          loadMore={
            featuredMovies.data?.moviesCount >
              featuredMovies.data?.movies.length && handleFetchMovies
          }
        />
      )}
    </Layout>
  );
};

export default IndexPage;

import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';

import { getAccessToken, setAccessToken } from 'hocs/AuthProvider';

const refreshTokenLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return true;
    }

    try {
      const { exp }: any = jwtDecode(token);

      if (Date.now() >= exp * 1000) return false;

      return true;
    } catch {
      return false;
    }
  },
  fetchAccessToken: () =>
    fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/refresh_token`, {
      method: 'POST',
      credentials: 'include',
    }),
  handleFetch: (accessToken: string) => {
    setAccessToken(accessToken);
  },
  handleError: (err: Error) => {
    setAccessToken(null);
  },
});

const authLink = setContext((_, { headers }) => {
  const token = getAccessToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        movies: {
          keyArgs: false,
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

const apolloClient = new ApolloClient({
  link: ApolloLink.from([
    refreshTokenLink,
    authLink,
    new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URL }),
  ]),
  cache: apolloCache,
});

export default apolloClient;

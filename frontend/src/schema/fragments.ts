import { gql } from '@apollo/client';

export const genreFields = gql`
  fragment genreFields on Genre {
    id
    slug
    name
  }
`;

export const movieFields = gql`
  fragment movieFields on Movie {
    id
    name
    genre {
      ...genreFields
    }
    rating
    duration
    views
    description
    coverImage
    trailerImage
    trailerVideo
  }

  ${genreFields}
`;

export const trailerFields = gql`
  fragment trailerFields on Trailer {
    id
    image
    video
  }
`;

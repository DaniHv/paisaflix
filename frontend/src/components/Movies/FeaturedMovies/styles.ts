import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MoviesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-gap: 1rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MovieCard = styled(motion.div)<{
  image?: string;
  skeleton?: boolean;
}>`
  position: relative;
  padding-top: 120% !important;
  border-radius: 1rem;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  ${(props) =>
    props.skeleton
      ? `background-color: rgba(255, 255, 255, .2);`
      : `
      background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.75)),
        url(${props.image});
      cursor: pointer;
  `}

  &:first-of-type {
    padding-top: 0 !important;
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &:first-of-type {
      padding-top: 50% !important;
    }
  }
`;

export const MovieCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  margin: 2rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  span {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 1rem;
    padding: 0.25rem 1rem;
    color: ${({ theme }) => theme.colors.darkText};
  }

  ul {
    display: flex;

    li {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      margin-bottom: 0.5rem;

      svg {
        margin-right: 0.5rem;
      }
    }
  }

  h3 {
    bottom: 0;
    font-size: 2.25rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 1.5rem;

    ul {
      flex-direction: column;
      font-size: 0.8rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem;

    span {
      font-size: 0.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h3 {
      font-size: 1rem;
    }
  }
`;

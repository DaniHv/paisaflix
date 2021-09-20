import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
  padding-top: 10rem;
  padding-bottom: 4rem;
  min-height: 100vh;
  box-sizing: border-box;
`;

export const MovieHero = styled(motion.div)`
  margin-bottom: 4rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 4.5rem;
  }

  p {
    margin-top: 4rem;
    margin-bottom: 2rem;
    max-width: 420px;
    line-height: 2rem;
  }

  ul {
    margin-bottom: 3rem;

    & li:not(:last-of-type) {
      padding-bottom: 1rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const MovieImage = styled.div<{ image: string }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 800px;
  background-image: linear-gradient(to left, transparent, black),
    linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5)),
    url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-position: top right;
  background-size: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1)),
      url('${(props) => props.image}');
    background-size: cover;
    background-position: top center;
    max-height: 768px;
  }
`;

export const MovieContent = styled(motion.div)`
  position: relative;
`;

export const SingleTrailer = styled(motion.div)`
  padding: 4rem 0;
  max-width: 25%;

  h2 {
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

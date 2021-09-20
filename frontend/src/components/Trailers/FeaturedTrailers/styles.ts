import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

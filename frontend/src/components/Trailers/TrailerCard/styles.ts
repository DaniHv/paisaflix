import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)<{
  skeleton?: boolean;
  image?: string;
}>`
  position: relative;
  padding-top: 50%;
  border-radius: 1rem;

  ${(props) =>
    props.skeleton
      ? `
      background-color: rgba(255, 255, 255, .2)
      `
      : `
      background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, .5)), url('${props.image}');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      cursor: pointer;
    `}

  span {
    position: absolute;
    bottom: -1rem;
    right: 1rem;
    font-size: 1.5rem;
  }
`;

export const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

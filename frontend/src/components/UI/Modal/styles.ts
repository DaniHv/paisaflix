import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 2000;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.33);
`;

const modalSizes = {
  sm: '480px',
  md: '640px',
  lg: '768px',
  xl: '1024px',
};

export const ModalDialog = styled(motion.div)<{ size: string }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => modalSizes[props.size]};
  background-color: ${({ theme }) => theme.colors.modalBg};
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  cursor: pointer;
  z-index: 100;

  svg {
    color: ${({ theme }) => theme.colors.darkText};
  }
`;

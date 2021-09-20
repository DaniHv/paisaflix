import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Header = styled(motion.header)`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1240px;
  padding: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
    padding: 1rem;
  }
`;

export const Logo = styled.a`
  padding-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-right: 0;
  }
`;

export const Menu = styled(motion.div)`
  display: flex;
  flex-grow: 1;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    z-index: 900;
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    background-color: #2e2e2e;
    flex-direction: column;
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

export const MenuItem = styled.a<{ active?: boolean }>`
  position: relative;
  margin: 1.5rem;

  ${(props) =>
    props.active &&
    `
    color: ${props.theme.colors.lightText};

    &::after {
      content: ' ';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -0.5rem;
      width: 100%;
      height: 4px;
      background-color: ${props.theme.colors.main};
    }
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  button:first-of-type {
    padding-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    button {
      display: none;
    }
  }
`;

export const AuthIcon = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.main};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;

  img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    margin-right: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    img {
      margin-right: 0;
    }

    span {
      display: none;
    }
  }
`;

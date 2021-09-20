import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Container = styled.div<{ centered: boolean }>`
  display: flex;
  ${(props) => props.centered && 'justify-content: center;'}
`;

const paddings = {
  sm: css`
    padding: 0.5rem 2rem;
  `,
  md: css`
    padding: 0.75rem 2rem;
  `,
  lg: css`
    padding: 1rem 4rem;
  `,
  xl: css`
    padding: 1.5rem 4rem;
  `,
};

export const ButtonTag = styled(motion.button)<{
  bgColor: string;
  textColor: string;
  padding: string;
  isLoading?: boolean;
}>`
  background-color: ${(props) =>
    props.theme.colors[props.bgColor] ?? props.bgColor};
  color: ${(props) => props.theme.colors[props.textColor] ?? props.textColor};
  border-radius: 5rem;
  border: none;
  font-weight: bold;
  cursor: pointer;
  ${(props) => paddings[props.padding]}
`;

export const AnchorTag = styled(motion.a)<{
  bgColor: string;
  textColor: string;
  padding: string;
  isLoading?: boolean;
}>`
  background-color: ${(props) =>
    props.theme.colors[props.bgColor] ?? props.bgColor};
  color: ${(props) => props.theme.colors[props.textColor] ?? props.textColor};
  border-radius: 5rem;
  font-weight: bold;
  cursor: pointer;
  ${(props) => paddings[props.padding]}
`;

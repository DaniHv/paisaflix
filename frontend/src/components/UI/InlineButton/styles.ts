import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const ButtonTag = styled(motion.button)<{ color?: string }>`
  display: inline-block;
  color: ${(props) => props.theme.colors[props.color ?? 'main']};
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;

export const AnchorTag = styled(motion.a)<{ color?: string }>`
  display: inline-block;
  color: ${(props) => props.theme.colors[props.color ?? 'main']};
  font-weight: bold;
  cursor: pointer;
`;

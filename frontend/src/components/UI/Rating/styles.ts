import styled from '@emotion/styled';

export const Rating = styled.div`
  display: flex;
`;

export const Star = styled.div<{ type: 'complete' | 'medium' | 'empty' }>`
  width: 1.5rem;
  height: 1.5rem;
  background-image: url('/assets/star-${(props) => props.type}.svg');
  background-position: cover;
  background-repeat: no-repeat;
`;

import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 1rem;
  }
`;

export default Container;

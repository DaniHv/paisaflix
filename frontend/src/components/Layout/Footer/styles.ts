import styled from '@emotion/styled';

export const Section = styled.footer`
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 2rem 1rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.a`
  display: inline-block;
  margin-bottom: 2rem;
`;

export const Navigation = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  h4,
  li {
    margin-bottom: 1.5rem;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: flex-end;

  a {
    display: flex;
    align-items: center;
    margin-right: 2rem;

    svg {
      margin-right: 0.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;

    a {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

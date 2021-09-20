import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  padding-bottom: 0.5rem;
`;

export const Field = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  outline: none;
  color: ${({ theme }) => theme.colors.defaultText};
  transition: border-color 0.5s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

export const Error = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.main};
`;

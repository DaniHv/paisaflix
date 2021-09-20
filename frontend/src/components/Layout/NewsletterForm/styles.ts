import styled from '@emotion/styled';

export const Title = styled.h4`
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  max-width: 250px;

  input {
    padding-right: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 350px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.5rem;
  width: 2rem;
  height: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

export const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.colors.main};
  font-weight: bold;
`;

import styled from '@emotion/styled';

export const ModalBody = styled.div`
  padding: 2rem;

  h3 {
    text-align: center;
    font-weight: 2rem;
    padding-bottom: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;

    button {
      margin: 0 auto;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    display: block;
    margin-top: 1rem;
    text-align: center;
    cursor: pointer;
  }
`;

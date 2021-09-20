import styled from '@emotion/styled';

export const ModalHeader = styled.div`
  position: relative;
  overflow: hidden;

  video {
    display: block;
    width: 100%;
  }

  span {
    display: inline-block;
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    color: ${({ theme }) => theme.colors.darkText};
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 1rem;
    padding: 0.25rem 1rem;
  }
`;

export const Overlay = styled.div`
  display: flex;
  background-image: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => theme.colors.modalBg}
  );
  padding: 1.5rem;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;

export const MuteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 100%;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  padding: 1.5rem;

  ul {
    display: flex;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      margin-right: 2rem;

      svg {
        color: ${({ theme }) => theme.colors.main};
        margin-right: 0.5rem;
      }
    }
  }

  p {
    margin-bottom: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    ul {
      flex-direction: column;

      li {
        margin-right: 0;

        &:not(:last-of-type) {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

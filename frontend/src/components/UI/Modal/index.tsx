import { FC, useEffect } from 'react';
import { css, Global } from '@emotion/react';
import { X } from 'react-feather';

import { Container, Overlay, ModalDialog, CloseButton } from './styles';

export type ModalProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  onClose: () => void;
  layoutId?: string;
};

const Modal: FC<ModalProps> = ({
  size = 'lg',
  onClose,
  layoutId,
  children,
}) => {
  const handleEscPress = (event) => {
    if (event.key == 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
        `}
      />

      <Overlay onClick={() => onClose()} />

      <ModalDialog layoutId={layoutId} size={size}>
        <CloseButton onClick={() => onClose()}>
          <X />
        </CloseButton>

        {children}
      </ModalDialog>
    </Container>
  );
};

export default Modal;

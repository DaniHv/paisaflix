import type { FC } from 'react';

import Modal, { ModalProps } from 'components/UI/Modal';
import { ModalBody } from './styles';

type AuthModalProps = ModalProps & {
  title: string;
};

const AuthModal: FC<AuthModalProps> = ({ title, onClose, children }) => {
  return (
    <Modal onClose={onClose} size="md">
      <ModalBody>
        <h3>{title}</h3>
        {children}
      </ModalBody>
    </Modal>
  );
};

export default AuthModal;

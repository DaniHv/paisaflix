import { useState } from 'react';

const useDisclosure = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);

  return {
    isOpen,
    onOpen: () => setIsOpen(true),
    onClose: () => setIsOpen(false),
  };
};

export default useDisclosure;

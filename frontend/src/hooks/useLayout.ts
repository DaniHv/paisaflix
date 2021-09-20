import { useContext } from 'react';

import { LayoutContext } from 'contexts';

const useLayout = () => {
  const { loginModal, registerModal } = useContext(LayoutContext);

  return {
    loginModal,
    registerModal,
  };
};

export default useLayout;

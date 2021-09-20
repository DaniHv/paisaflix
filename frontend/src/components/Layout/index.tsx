import type { FC } from 'react';
import { AnimatePresence } from 'framer-motion';

import Header from './Header';
import Footer from './Footer';
import useAuth from 'hooks/useAuth';
import useDisclosure from 'hooks/useDisclosure';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import LayoutContext from 'contexts/LayoutContext';

const Layout: FC = ({ children }) => {
  const { isFetching, isLogged } = useAuth();
  const loginModal = useDisclosure();
  const registerModal = useDisclosure();

  return (
    <LayoutContext.Provider value={{ loginModal, registerModal }}>
      <Header />
      {children}
      <Footer />
      {!isFetching && !isLogged && (
        <AnimatePresence>
          {loginModal.isOpen && <LoginModal />}
          {registerModal.isOpen && <RegisterModal />}
        </AnimatePresence>
      )}
    </LayoutContext.Provider>
  );
};

export default Layout;

import { createContext } from 'react';

const LayoutContext = createContext({
  loginModal: null,
  registerModal: null,
});

export default LayoutContext;

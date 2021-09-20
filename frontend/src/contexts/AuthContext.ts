import { createContext } from 'react';

export type AuthContextType = {
  isFetching: boolean;
  user: any;
  setUser: () => void;
  setAccessToken: () => void;
};

const AuthContext = createContext({
  isFetching: false,
  user: null,
  setUser: null,
  setAccessToken: null,
});

export default AuthContext;

import { useContext } from 'react';

import AuthContext from 'contexts/AuthContext';

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return {
    isLogged: !!authContext.user,
    updateUser(content) {
      authContext.setUser({
        ...authContext.user,
        ...content,
      });
    },
    ...authContext,
  };
};

export default useAuth;

import { useEffect, useState } from 'react';

import { AuthContext } from 'contexts';

let accessToken;

export const getAccessToken = () => accessToken;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const fetchAccessToken = () =>
  fetch(`${process.env.NEXT_PUBLIC_AUTH_URL}/refresh_token`, {
    method: 'POST',
    credentials: 'include',
  });

const AuthProvider: React.FC = ({ children }) => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchAccessToken()
      .then((response) => response.json())
      .then((data) => {
        if (data.accessToken && data.user) {
          setAccessToken(data.accessToken);
          setUser(data.user);
        }

        setFetching(false);
      })
      .catch((error: Error) => {
        console.error(
          'Error al conectarse con el servidor de autenticación',
          error,
        );

        setFetching(false);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isFetching: fetching,
        user,
        setUser,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

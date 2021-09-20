import { NextPage } from 'next';

import { Loading, Unauthenticated } from 'containers';
import useAuth from 'hooks/useAuth';

const withAuthentication = (Page: NextPage) => () => {
  const { isFetching, isLogged } = useAuth();

  if (isFetching) return <Loading />;
  if (!isLogged) return <Unauthenticated />;

  return <Page />;
};

export default withAuthentication;

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';

import apolloClient from 'lib/apolloClient';
import AuthProvider from 'hocs/AuthProvider';
import theme from 'utils/theme';
import GlobalStyles from 'components/GlobalStyles';
import { AnimatePresence, motion } from 'framer-motion';

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />

          <AnimatePresence>
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'linear' }}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;

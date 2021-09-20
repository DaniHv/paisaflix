import type { FC } from 'react';
import { useTheme, Global, css } from '@emotion/react';

const GlobalStyles: FC = () => {
  const theme: any = useTheme();

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-color: ${theme.colors.mainBg};
          color: ${theme.colors.defaultText};
          font-family: ${theme.texts.defaultFont};
        }

        a {
          color: ${theme.colors.defaultText};
          text-decoration: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.lightText};
        }

        li {
          list-style: none;
        }
      `}
    />
  );
};

export default GlobalStyles;

const theme: any = {
  texts: {
    defaultFont: '"DM Sans", sans-serif',
  },
  colors: {
    mainBg: '#000000',
    modalBg: '#2E2E2E',
    defaultText: '#E5E5E5',
    lightText: '#FFFFFF',
    darkText: '#2E2E2E',
    main: '#FED530',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

type Theme = typeof theme;

export type { Theme };
export default theme;

export const palette = {
  primary: {
    main: '#1d7bff',
    light: '#C64DFF',
    dark: '#5700b1',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#d62684',
    light: '#ff62b4',
    dark: '#a00057',
    contrastText: '#ffffff',
  },
}

export const overrides = {
  MuiCssBaseline: {
    '@global': {
      html: {
        WebkitFontSmoothing: 'auto',
        height: '100%',
      },
      body: {
        height: '100%',
      },
      '#root': {
        height: '100%',
      },
    },
  },
}

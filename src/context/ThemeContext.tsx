import { FC, createContext, useState } from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

import { palette, overrides } from '../styles/theme'

const userPrefersDarkMode = (): boolean => {
  let prefersDarkMode = false

  if (localStorage.getItem('theme') === null)
    prefersDarkMode = matchMedia('(prefers-color-scheme: dark)').matches
  else prefersDarkMode = localStorage.getItem('theme') === 'dark'

  return prefersDarkMode
}

export const ThemeContext = createContext({
  preferDarkMode: userPrefersDarkMode(),
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleDarkMode: (): void => {},
})

export const ThemeUiProvider: FC = ({ children }) => {
  const [preferDarkMode, setPrefersDarkMode] = useState(userPrefersDarkMode)

  const theme = createMuiTheme({
    palette: {
      ...palette,
      type: preferDarkMode ? 'dark' : 'light',
    },
    overrides,
  })

  const toggleDarkMode = (): void => {
    localStorage.setItem('theme', preferDarkMode ? 'light' : 'dark')
    setPrefersDarkMode(!preferDarkMode)
  }

  return (
    <ThemeContext.Provider value={{ preferDarkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

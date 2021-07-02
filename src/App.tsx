import { FC } from 'react'
import { CssBaseline } from '@material-ui/core'

import Router from './Routes'
import { ThemeUiProvider } from './context/ThemeContext'

const App: FC = () => {
  return (
    <ThemeUiProvider>
      <CssBaseline />
      <Router />
    </ThemeUiProvider>
  )
}

export default App

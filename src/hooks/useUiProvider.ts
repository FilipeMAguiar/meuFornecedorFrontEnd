import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'

interface UiInterface {
  preferDarkMode: boolean
  toggleDarkMode: () => void
}

export function useUiProvider(): UiInterface {
  const context = useContext(ThemeContext)

  const { preferDarkMode, toggleDarkMode } = context

  return { preferDarkMode, toggleDarkMode }
}

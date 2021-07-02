import { FC, useState, useCallback, ReactNode, ReactElement } from 'react'
import { Box } from '@material-ui/core'

import AppBar from './AppBar'
import Menu from './Menu'
import Footer from './Footer'

import { useStyles } from './styles'

const Layout: FC = ({ children }) => {
  const [isMenuOpen, setOpenMenu] = useState(false)

  const classes = useStyles()

  const onOpenMenu = useCallback(() => setOpenMenu(true), [setOpenMenu])
  const onCloseMenu = useCallback(() => setOpenMenu(false), [setOpenMenu])

  return (
    <Box height="100%" display="flex">
      <AppBar isMenuOpen={isMenuOpen} onOpenMenu={onOpenMenu} />
      <Menu
        isMenuOpen={isMenuOpen}
        onOpenMenu={onOpenMenu}
        onCloseMenu={onCloseMenu}
      />
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Box className={classes.toolbar}></Box>
        <Box display="flex" flexDirection="column" flexGrow={1} padding={6}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}

const withLayout = (component: ReactNode): ReactElement | null => (
  <Layout>{component}</Layout>
)

export default withLayout

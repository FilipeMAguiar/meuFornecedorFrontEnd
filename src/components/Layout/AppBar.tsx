import { FC, useState, MouseEvent } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Switch,
  FormControlLabel,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { useStyles } from './styles'
import { useUiProvider } from '../../hooks/useUiProvider'

type Props = {
  isMenuOpen: boolean
  onOpenMenu: () => void
}

const MenuAppBar: FC<Props> = ({ isMenuOpen, onOpenMenu }) => {
  const classes = useStyles()
  const [auth] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { preferDarkMode, toggleDarkMode } = useUiProvider()

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isMenuOpen,
      })}
    >
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onOpenMenu}
        >
          <MenuIcon />
        </IconButton>
        <img src="/img/meu-fornecedor-logo.png" className={classes.logoBar} />
        <Typography variant="h6" className={classes.title}>
          MeuFornecedor
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
              className={classes.userMenuDropDown}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/">Logout</Link>
              </MenuItem>
              <MenuItem>
                <FormControlLabel
                  control={
                    <Switch
                      size="small"
                      checked={preferDarkMode}
                      onChange={toggleDarkMode}
                      color="primary"
                    />
                  }
                  label={`Dark Mode`}
                />
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default MenuAppBar
